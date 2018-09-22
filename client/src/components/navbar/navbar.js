import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null, activeItem: null };
  }

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
    this.handleItemClick();
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state

    if (this.state.authenticated === null) return null;

    const ifAuth = this.state.authenticated ? (
        <Link to="/">
                        <Menu.Item
                            position='right'
                            name='auth'
                            active={activeItem === 'auth'}
                            content='Logout'
                            onClick={this.logout}
                        /></Link>
    ) : (
        <Link to="/login">
                        <Menu.Item
                            position='right'
                            name='auth'
                            active={activeItem === 'auth'}
                            content='Login'
                            onClick={this.login}
                        /></Link>
    )
    return (
        <Menu stackable pointing secondary>

                <Link to="/">
                    <Menu.Item>
                        <span>Logo</span>
                    </Menu.Item>
                </Link>

                <Menu.Menu position='right'>
                    <Link to="/">
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            content='Home'
                            onClick={this.handleItemClick}
                        /></Link>

                    <Link to="/business">
                        <Menu.Item
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