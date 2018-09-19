import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import "./NavBar.css";

export default withAuth(class NavBar extends Component{
    state = { 
        authenticated: null,
        currentEmail: ""
    };

    checkAuthentication = async() => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({authenticated});
        }
    }

    async componentDidMount() {
        const OktaToken = JSON.parse(localStorage.getItem("okta-token-storage"));

        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async() => {
        this.props.auth.login("/");
    }

    logout = async() => {
        this.props.auth.logout("/");
    }

    render() {
        if (this.state.authenticated === null) return null;

        const ifAuth = this.state.authenticated ? (
            <a onClick={this.logout}>Sign Out</a>
        ) : (
            <a onClick={this.login}>Sign In</a>
        );

        return (
            <header>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">eCards</Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link className="modal-trigger" to="/business">My Business</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                <li>{ifAuth}</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
})