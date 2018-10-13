import React, { Component } from 'react'
import { Responsive, Segment, Header, Loader, Button, Divider, Item } from 'semantic-ui-react';
import BreadCrumb from '../breadCrumb/breadcrumb';
import { getAllBusiness } from '../../../../util/logic';

export default class Select extends Component {

    state = {
        businessArray: [],
        loading: true
    }

    async componentDidMount() {
        //console.log(this.props.match.path)
        console.log("did mount")
        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        if (!Token.hasOwnProperty("userId")) {
            console.log("You have no token yet");
        } else {
            try {
                const data = await getAllBusiness(Token.userId)

                console.log("getAllBusiness returned:", data);

                this.setState({
                    businessArray: data,
                    loading: false
                })
            } catch (e) {
                console.log(e);
            }
        }
    }

    addCurrentBusiness = (businessID) => {
        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        const parsed = Token;

        parsed["currentBusiness"] = businessID;

        localStorage.setItem('okta-token-storage', JSON.stringify(parsed));


        console.log("Token with businessID")
        console.log(Token);
        console.log("=============================================")


        this.props.history.push("/dashboard")
    }


    render() {

        const businessList = this.state.businessArray.map((business) =>
            <Item key={business._id}>
            <Item.Content>
                <Item.Header as={Header}>
                    {business.businessName}
                </Item.Header>
                <Item.Meta>
                <br></br>
                <span>Street Address: {business.streetAddress}</span>
                <br></br>
                <br></br>
                <span>Email: {business.eMail}</span>
                <br></br>
                <br></br>
                <span>Business Phone: {business.businessPhone}</span>
                <br></br>
                <br></br>
                <span>Cell Phone: {business.cellPhone}</span>
                </Item.Meta>
                <Item.Extra>
                <Button positive floated='right' type='submit' onClick={() => { this.addCurrentBusiness(business._id) }}>Select Business</Button>
                </Item.Extra>
            </Item.Content>

            </Item>);

        const ifLoading = this.state.loading ? (
            <Responsive>
                <Loader size='massive' active inline='centered'>Loading Content</Loader>
            </Responsive>
        ) : (
                <Responsive>

                <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout}/>
                    <Divider />
                    <Segment>
                        <Item.Group divided relaxed>
                        {businessList}
                        </Item.Group>
                    </Segment>
                </Responsive>
            );

        return (
            <div>
                {ifLoading}
            </div>
        )
    }
}
