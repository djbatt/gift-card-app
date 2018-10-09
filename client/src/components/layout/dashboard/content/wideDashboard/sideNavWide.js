import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class SideNavWide extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    

    render() {

        const { activeItem } = this.state || {}

        return (
            <Menu secondary vertical fluid size='large'>
                <Menu.Item>
                    <img className='dashLogoWide' src='/images/ugift2.PNG'/>
                </Menu.Item>
                <Menu.Item
                    as={Link} to='/dashboard'
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}
                    content='Dashboard'
                />
                <Menu.Item
                    as={Link} to='/dashboard/verify'
                    name='verify'
                    active={activeItem === 'verify'}
                    onClick={this.handleItemClick}
                    content='Verify Gift'
                />
                <Menu.Item
                    as={Link} to='/dashboard/edit'
                    name='edit'
                    active={activeItem === 'edit'}
                    onClick={this.handleItemClick}
                    content='Edit Business'
                />
                <Menu.Item
                    as={Link} to='/dashboard/select'
                    name='select'
                    active={activeItem === 'select'}
                    onClick={this.handleItemClick}
                    content='Select Business'
                />
                <Menu.Item
                    as={Link} to='/dashboard/create'
                    name='create'
                    active={activeItem === 'create'}
                    onClick={this.handleItemClick}
                    content='Add Business'
                />
                <Menu.Item
                    as={Link} to='/dashboard/support'
                    name='support'
                    active={activeItem === 'support'}
                    onClick={this.handleItemClick}
                    content='Support'
                />
                <Menu.Item
                    as={Link} to='/dashboard/faq'
                    name='faq'
                    active={activeItem === 'faq'}
                    onClick={this.handleItemClick}
                    content='FAQ'
                />
            </Menu>
        )
    }
}