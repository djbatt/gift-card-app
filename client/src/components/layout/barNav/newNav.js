import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class newNav extends Component {

render() {
    
    return (
        <Menu stackable pointing secondary className='noBar' size='huge'>

            <Menu.Menu position='right'>
                    <Menu.Item as={Link} to='/'
                        name='home'
                        className='bar'
                        content='Home'
                    />
                    <Menu.Item as={Link} to='/pricing'
                        name='pricing'
                        content='Pricing'
                    />
                    <Menu.Item as={Link} to='/contact'
                        name='contact'
                        content='Contact Us'
                    />
                    <Menu.Item as={Link} to='/dashboard'
                        name='dashboard'
                        content='Dashboard'
                    />
            </Menu.Menu>

        </Menu>
    );
}
}
