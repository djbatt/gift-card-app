import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import "./NavBar.css";

export default withAuth(class NavBar extends Component{
    state = { authenticated: null };

    checkAuthentication = async() => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({authenticated});
        }
    }

    async componentDidMount() {
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
            <li>
                <a onClick={this.logout}>Sign Out</a>
            </li>
        ) : (
            <li>
                <a onClick={this.login}>Sign In</a>
            </li>
        );

        return (
            <header>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">eCards</Link>
                            <Link to="/" className="sidenav-trigger" data-target="leftNav">
                                <i className="material-icons">menu</i>
                            </Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link className="modal-trigger" to="/business">My Business</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                {ifAuth}
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="leftNav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link className="modal-trigger" to="/business">My Business</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    {ifAuth}
                </ul>
            </header>
        )
    }
})

// export default class NavBar extends Component {
//   render() {
//     return (
//     <header>
//         <div className="navbar-fixed">
//             <nav>
//                 <div className="nav-wrapper">
//                     <Link to="/" className="brand-logo">eCards</Link>
//                     <Link to="/" className="sidenav-trigger" data-target="leftNav">
//                         <i className="material-icons">menu</i>
//                     </Link>
//                     <ul className="right hide-on-med-and-down">
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link className="modal-trigger" to="/business">My Business</Link></li>
//                         <li><Link to="/">Contact Us</Link></li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//         <ul className="sidenav" id="leftNav">
//             <li><Link to="/">Home</Link></li>
//             <li><Link className="modal-trigger" to="/business">My Business</Link></li>
//             <li><Link to="/">Contact Us</Link></li>
//         </ul>
//     </header>
//     )
//   }
// }