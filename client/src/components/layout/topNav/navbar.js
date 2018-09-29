import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import API from '../../util/API';

export default withAuth(class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: null,
            activeItem: null
        };
    }
    

    checkAuthentication = async () => {
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

        // const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

        // if (this.isEmpty(oktaToken)) {
        //     console.log("You have no token!")
        // } else {
        //     console.log("You have a token!")
        //     this.updateDB(oktaToken);
        // }
    }

    login = async () => {
        this.props.auth.login('/');
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    // isEmpty = (obj) => {
    //     for (var key in obj) {
    //         if (obj.hasOwnProperty(key))
    //             return false;
    //     }
    //     return true;
    // }

    // updateDB = (Token) => {

    //     const userName = Token.idToken.claims.name;
    //     const userEmail = Token.idToken.claims.email;
    //     const userUnique = Token.idToken.claims.sub;
    //     console.log(Token);
    //     console.log("=============================================")

    //     API.findUser(userUnique).then((res) => {
    //         // if there is no user, save a user to the db, and store id as uId
    //         // if you have to save a user, then you have no business and set hasBusiness to false
    //         if (!res.data.length) {
    //             console.log(res.data);
    //             console.log("=============================================");

    //             API.saveUser({ name: userName, email: userEmail, oktaUnique: userUnique }).then((res) => {

    //                 console.log(res.data);
    //                 console.log("=============================================");

    //             })
    //         } else {
    //             console.log("We already have your user saved")
    //             console.log("=============================================")
    //         }
    //     })
    // }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        if (this.state.authenticated === null) return null;

        const ifAuth = this.state.authenticated ? (
            <Link to="/">
                <Menu.Item as='div'
                    position='right'
                    name='auth'
                    active={activeItem === 'auth'}
                    content='Logout'
                    onClick={this.logout}
                />
            </Link>

        ) : (
                <Link to="/login">
                    <Menu.Item as='div'
                        position='right'
                        name='auth'
                        active={activeItem === 'auth'}
                        content='Login'
                        onClick={this.login}
                    />
                </Link>
            )
        return (
            <Menu stackable pointing secondary>

                <Link to="/">
                    <Menu.Item as='div'>
                        <Image className='centered' src="ezGift.png" />
                    </Menu.Item>
                </Link>

                <Menu.Menu position='right' className='topNavMargin'>
                    <Link to="/">
                        <Menu.Item as='div'
                            name='home'
                            active={activeItem === 'home'}
                            content='Home'
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