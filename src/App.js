import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// Imports react and our router!

//Layout!
import NavBar from "./components/layout/NavBar";

//Pages!
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";

// import { Security, ImplicitCallback } from '@okta/okta-react';

// const config = {
//   issuer: 'https://dev-395274.oktapreview.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '{clientId}'
// }
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="no-padding">
          <NavBar/>
          <div className="container">
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/business" exact={true} component={Business}></Route>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
