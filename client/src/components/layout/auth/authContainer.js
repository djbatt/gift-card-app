import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import { withAuth } from '@okta/okta-react';

import { SecureRoute } from '@okta/okta-react';

//Page Imports
import Dashboard from '../../pages/business';

export default withAuth(class AuthContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
    }

    checkAuthentication = async () => {
        console.log("check auth ran", this.state.authenticated)
        const authenticated = await this.props.auth.isAuthenticated();
        console.log(authenticated)
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async () => {
        this.props.auth.login('/dashboard')
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    render() {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        if (this.state.authenticated === null) return null;

        const ifLoading = !this.state.authenticated === true ? (

            <div>

            </div>
        ) : (
                <Responsive>
                    <SecureRoute path="/dashboard" exact={false} render={(props) => <Dashboard {...props} uId={this.state.uId} logout={this.logout} />} />
                </Responsive>
            )

        if (!Token.hasOwnProperty('userId')) {
            console.log("no userId")
        }
        return (
            <div>
                {ifLoading}
            </div>
        );
    }
});

//First things first figure out why when you click on dashboard from home it does not render, it is a timing issue with the login state