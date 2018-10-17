import React, { Component } from 'react';
import { Responsive, Loader } from 'semantic-ui-react';
import { withAuth } from '@okta/okta-react';
import API from '../../util/API';
//import { updateDB } from '../../util/logic';

import { SecureRoute } from '@okta/okta-react';

//Page Imports
import Dashboard from '../../pages/business';

export default withAuth(class AuthContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
    }

    checkUser = async () => {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        const userName = Token.idToken.claims.name;
        const userEmail = Token.idToken.claims.email;
        const userUnique = Token.idToken.claims.sub;

        try {
            const res = await API.findUser(userUnique) //Check if there is a user in the db, matching the oktaUnique

            if (!res.data.length) {

                //If not, save the user to the db

                const saved = await API.saveUser({ name: userName, email: userEmail, oktaUnique: userUnique })

                // console.log("You have no user saved, here is your user")
                // console.log(saved.data);
                // console.log("=============================================");

                this.adduId(Token, saved.data._id); // Add uid to localstorage

            } else {
                // console.log("We already have your user saved")
                // console.log(res.data);
                // console.log("=============================================")

                this.adduId(Token, res.data[0]._id); // Add uid to localstorage
            }
        } catch (e) {
            console.log(e);
        }
    }

    adduId = async (Token, uId) => {
        const parsed = Token;

        parsed["userId"] = uId;

        localStorage.setItem('okta-token-storage', JSON.stringify(parsed));

        await this.setState({
            uId: uId
        })
        console.log("Token with UID")
        console.log(Token);
        console.log("=============================================")
    }


    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated }, () => {
                if (this.state.authenticated) {
                    this.checkUser()
                }
            });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async () => {
        this.props.auth.login('/dashboard');
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    render() {

        if (this.state.authenticated === null) return null;

        const ifLoading = !this.state.uId ? (

            <Responsive>
                <Loader size='massive' active inline='centered'>Loading Content</Loader>
            </Responsive>
        ) : (
            <Responsive>
                <SecureRoute path="/dashboard" exact={false} render={(props) => <Dashboard {...props} uid={this.state.uId} logout={this.logout} />} />
            </Responsive>
        )

        return (
            <div>
                {ifLoading}
            </div>
        );
    }
});