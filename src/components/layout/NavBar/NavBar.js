import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
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
                    </ul>
                </div>
            </nav>
        </div>
        <ul className="sidenav" id="leftNav">
            <li><Link to="/">Home</Link></li>
            <li><Link className="modal-trigger" to="/business">My Business</Link></li>
            <li><Link to="/">Contact Us</Link></li>
        </ul>
    </header>
    )
  }
}