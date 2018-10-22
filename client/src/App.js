import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Page Routes
import NotFound from './components/layout/404/404';
import Home from './components/layout/home/home';
import Dashboard from './components/layout/dashboard/dashboard';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
