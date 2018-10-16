import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

export default class SideNavWide extends Component {

    render() {

        return (
            <Menu secondary vertical fluid size='large'>
                <Menu.Item>
                    <img className='dashLogoWide' src='/images/ugift2.PNG' alt='Logo' />
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard'
                    name='dashboard'>
                    <Icon name='dashboard' />
                    Dashboard
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/edit'
                    name='edit'>
                    <Icon name='edit' />
                    Edit Business
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/select'
                    name='select'>
                    <Icon name='sitemap' />
                    Select Business
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/create'
                    name='create'>
                    <Icon name='book' />
                    Add Business
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/support'
                    name='support'>
                    <Icon name='help circle' />
                    Support
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/faq'
                    name='faq'>
                    <Icon name='file alternate' />
                    FAQ
                </Menu.Item>
            </Menu>
        )
    }
}