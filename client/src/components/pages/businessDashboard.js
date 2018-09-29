import React, { Component } from 'react'
import Dashboard from '../content/business/dashboard'
import CreateBusiness from '../content/business/createBusiness'
import API from '../util/API';

export default class Business extends Component {

    state = {
        uId: null,
        businessId: null,
        hasBusiness: null,
        submitClicked: null,
        businessInfo: {}
    }

    componentDidMount() {

        const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

        const userName = oktaToken.idToken.claims.name;
        const userEmail = oktaToken.idToken.claims.email;
        const userUnique = oktaToken.idToken.claims.sub;

        console.log(`Your oktaToken:`);
        console.log(oktaToken);
        console.log("=============================================")

        API.findUser(userUnique).then((res) => {
            // if there is no user, save a user to the db, and store id as uId
            // if you have to save a user, then you have no business and set hasBusiness to false
            if (!res.data.length) {
                console.log(`No user found, this is your response`);
                console.log(res.data);
                console.log("=============================================");

                API.saveUser({ name: userName, email: userEmail, oktaUnique: userUnique }).then((res) => {

                    console.log(`This is your saved user`);
                    console.log(res.data);
                    console.log("=============================================");

                    this.setState({
                        uId: res.data._id,
                        hasBusiness: false
                    }, () => {
                        console.log(`This is your state, you have no business`);
                        console.log(this.state);
                        console.log("=============================================");
                    })
                })
            } else {
                console.log(`User found, this is your response`);
                console.log(res.data);
                console.log("=============================================");
                
                this.setState({
                    uId: res.data[0]._id
                })
                console.log(`This is your state, before check`);
                console.log(this.state);
                console.log("=============================================");

                this.hasBusiness();
            }
        })
    }

    getBusiness = () => {
        API.getBusiness(this.state.businessId).then((res) => {

            console.log(`This is your response, dashboard`);
            console.log(res.data[0]);
            console.log("=============================================");
      
            this.setState({
              businessInfo: res.data[0]
            })
            
            console.log(`This is your state, after it is set`);
            console.log(this.state);
            console.log("=============================================");
          })
    }

    hasBusiness = () => {
        API.hasBusiness(this.state.uId)
                    .then((res) => {

                        console.log(`This is your response`);
                        console.log(res.data[0]);
                        console.log("=============================================");

                        if (!res.data[0].business.length) {
                            this.setState({
                                hasBusiness: false
                            }, () => {
                                console.log(`This is your state, if you have no business`);
                                console.log(this.state);
                                console.log("=============================================");
                            })
                        } else {
                            this.setState({
                                businessId: res.data[0].business[0],
                                hasBusiness: true
                            }, () => {

                                this.getBusiness();
                                console.log(`This is your state, if you have a business`);
                                console.log(this.state);
                                console.log("=============================================");
                            })
                        }
                    })
    }

    onSubmit = () => {
        this.setState({
            hasBusiness: true
        }, () => {
            this.hasBusiness();
        })
    }


    render() {

        if (this.state.hasBusiness === null) return null;

        const ifBusiness = this.state.hasBusiness ? (
            <Dashboard businessInfo={this.state.businessInfo}/>
        ) : (
                <CreateBusiness update={this.onSubmit} uId={this.state.uId}/>
            )

        return (
            <div>
                {ifBusiness}
            </div>
        )
    }
}
