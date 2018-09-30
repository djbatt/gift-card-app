// React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Layout Imports
import NavBar from './layout/topNav/navbar';

//Page Imports
import Home from './pages/home';
import businessDashboard from './pages/businessDashboard';
import createBusiness from './pages/createBusiness';

//Semantic Imports
import { Container } from 'semantic-ui-react';

//Okta
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './layout/auth/login';

function AuthHandler({ history }) {
  history.push('/login');
}

const config = {
  issuer: 'https://dev-395274.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oag8u3gaj3yrNkzc0h7'
}

export default class TotalContainer extends Component {

  render() {
    return (
      <Router>
        <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri} onAuthRequired={AuthHandler}>
          <div>
            <NavBar/>
            <Container>
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/business" exact={false} component={businessDashboard}/>
              <SecureRoute path="/createbusiness/:id" exact={true} component={createBusiness} />
            </Container>
          </div>
          <Route path='/login' render={() => <Login baseUrl='https://dev-395274.oktapreview.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    )
  }
}

