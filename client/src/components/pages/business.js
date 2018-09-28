import React, { Component } from 'react'
import Dashboard from '../content/business/dashboard'
import CreateBusiness from '../content/business/createBusiness'
import API from '../util/API';

export default class Business extends Component {

    state = {
        hasBusiness: null
    }

    componentDidMount() {

        const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

        const userName = oktaToken.idToken.claims.name;
        const userEmail = oktaToken.idToken.claims.email;
        const userUnique = oktaToken.idToken.claims.sub;
        
        console.log(oktaToken);
        
        // Check if user exists on componentMount, if not saveUser to db
        API.findUser(userUnique).then((res) => {
            console.log(res);
            console.log("success");
            if (!res.data.length) {
                API.saveUser({name: userName, email: userEmail, oktaUnique: userUnique}).then(() => {
                    console.log(res);
                    console.log("success");
                this.setState({
                    hasBusiness: false
                }, () => console.log(this.state.hasBusiness))
                })
            } else {
                API.ifBusinessExists(res.data[0]._id)
                .then((res) => {
                    this.setState({
                        hasBusiness: true
                    })
                })
            }
        })
    }
    

    render() {

        if (this.state.hasBusiness === null) return null;

        const ifBusiness = this.state.hasBusiness ? (
            <Dashboard/>
        ) : (
            <CreateBusiness/>
        )

        return (
            <div>
                {ifBusiness}
            </div>
        )
    }
}
