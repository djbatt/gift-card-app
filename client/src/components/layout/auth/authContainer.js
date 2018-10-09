import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { updateDB } from '../../util/logic';

import { SecureRoute } from '@okta/okta-react';
import { Route } from 'react-router-dom';

//Page Imports
import Dashboard from '../../pages/business';

export default withAuth(class AuthContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
    }

    checkUser = async () => {
        try {
            await updateDB()
        } catch (e) {
            console.log(e);
        }
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

        return (
            <Responsive>
                <SecureRoute path="/dashboard" exact={false} render={(props) => <Dashboard {...props} login={this.login} logout={this.logout}/>} />
            </Responsive>
        );
    }
});