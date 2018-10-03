import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class SmallScreenNav extends Component {

    render() {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));
        
        const userEmail = Token.idToken.claims.email;

        return (
            <Menu secondary>

                <Menu.Item icon='content' onClick={this.props.Click}/>

                <Menu.Item>
                    <h4>{userEmail}</h4>
                </Menu.Item>

            </Menu>
        )
    }
}