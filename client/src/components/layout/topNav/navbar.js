import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { updateDB } from '../../util/logic';

export default withAuth(class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: null,
            activeItem: null
        };
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
        this.props.auth.login('/business');
    }

    logout = async () => {
        this.props.auth.logout('/login');
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name }, () => {
        if (this.state.authenticated === true && name === "auth") {
            this.logout();
        } else if (this.state.authenticated === false && name === "auth") {
            this.login();
        }
    });

    render() {
        const { activeItem } = this.state

        if (this.state.authenticated === null) return null;

        const ifAuth = this.state.authenticated ? (
            <Link to="/business">
                <Menu.Item as='div'
                    position='right'
                    name='auth'
                    active={activeItem === 'auth'}
                    content='Logout'
                    onClick={this.handleItemClick}
                />
            </Link>

        ) : (
                <Link to="/login">
                    <Menu.Item as='div'
                        position='right'
                        name='auth'
                        active={activeItem === 'auth'}
                        content='Login'
                        onClick={this.handleItemClick}
                    />
                </Link>
            )
        return (
            <Menu stackable pointing secondary className='noBar'>

                <Menu.Menu position='right' className='topNavMargin'>
                    <Link to="/">
                        <Menu.Item as='div'
                            name='home'
                            active={activeItem === 'home'}
                            content='Home'
                            onClick={this.handleItemClick}
                        /></Link>

                    <Link to="/pricing">
                        <Menu.Item as='div'
                            name='pricing'
                            active={activeItem === 'pricing'}
                            content='Pricing'
                            onClick={this.handleItemClick}
                        /></Link>

                    <Link to="/contact">
                        <Menu.Item as='div'
                            name='contact'
                            active={activeItem === 'contact'}
                            content='Contact Us'
                            onClick={this.handleItemClick}
                        /></Link>

                    <Link to="/business">
                        <Menu.Item as='div'
                            name='myBusiness'
                            active={activeItem === 'myBusiness'}
                            content='My Business'
                            onClick={this.handleItemClick}
                        /></Link>

                    {ifAuth}
                </Menu.Menu>

            </Menu>
        );
    }
});