// Imports react and react router
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Global style
import './App.css';

//Layout!
import NavBar from "./components/layout/NavBar";
import Login from "./components/layout/auth/login";

//Pages!
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";

//Okta
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-395274.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oag8u3gaj3yrNkzc0h7'
}

function AuthHandler({history}) {
  history.push("/login");

}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri} onAuthRequired={AuthHandler}>
        <main className="no-padding">
          <NavBar/>
          <div className="container">
            <Route path="/implicit/callback" component={ImplicitCallback}></Route>
            <Route path="/login" render={() => <Login baseUrl="https://dev-395274.oktapreview.com"/>}></Route>
            <Route path="/" exact={true} component={Home}></Route>
            <SecureRoute path="/business" exact={true} component={Business}></SecureRoute>
          </div>
        </main>
        </Security>
      </Router>
    );
  }
}

export default App;
