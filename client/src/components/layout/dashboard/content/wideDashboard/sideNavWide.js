import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

export default class SideNavWide extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {

        const { activeItem } = this.state || {}

        return (
            <Menu secondary vertical fluid size='large'>
                <Menu.Item>
                    <img className='dashLogoWide' src='/images/ugift2.PNG' alt='Logo' />
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard'
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}>
                    <Icon name='dashboard' />
                    Dashboard
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/edit'
                    name='edit'
                    active={activeItem === 'edit'}
                    onClick={this.handleItemClick}>
                    <Icon name='edit' />
                    Edit Business
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/select'
                    name='select'
                    active={activeItem === 'select'}
                    onClick={this.handleItemClick}>
                    <Icon name='sitemap' />
                    Select Business
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/create'
                    name='create'
                    active={activeItem === 'create'}
                    onClick={this.handleItemClick}>
                    <Icon name='book' />
                    Add Business
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/support'
                    name='support'
                    active={activeItem === 'support'}
                    onClick={this.handleItemClick}>
                    <Icon name='help circle' />
                    Support
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard/faq'
                    name='faq'
                    active={activeItem === 'faq'}
                    onClick={this.handleItemClick}>
                    <Icon name='file alternate' />
                    FAQ
                </Menu.Item>
            </Menu>
        )
    }
}