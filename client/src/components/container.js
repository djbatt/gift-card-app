// React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Page Imports
import Home from './pages/home';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Gift from './pages/gift';

import AuthContainer from './layout/auth/authContainer'

//Okta
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
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
          <SecureRoute path='/dashboard' exact={false} component={AuthContainer}/>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/pricing" exact={true} component={Pricing} />
          <Route path="/contact" exact={true} component={Contact} />
          <Route path="/gift/:id" exact={true} component={Gift} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-395274.oktapreview.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    )
  }
}

