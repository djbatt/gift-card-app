import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './nav.css';

export default function navbar() {
    return (
        <Menu stackable pointing secondary size='huge'>

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
    )
}
