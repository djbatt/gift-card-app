import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

export default class wideNav extends Component {
    render() {
        return (
            <Menu secondary vertical fluid size='massive'>

                <Menu.Item
                    content='Dashboard'
                    onClick={() => {
                        console.log("clicked")
                    }}
                />

                <Menu.Item
                    onClick={() => {
                        console.log("clicked")
                    }}>
                    Gifts
                        <Icon name='caret down' />
                </Menu.Item>
                <Menu.Menu>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        Verify
                        <Icon name='check' />
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        Services
                        <Icon name='cut' />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Item
                    onClick={() => {
                        console.log("clicked")
                    }}>
                    Business
                        <Icon name='caret down' />
                </Menu.Item>
                <Menu.Menu>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        Edit
                        <Icon name='edit' />
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        Add
                        <Icon name='database' />
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        Delete
                        <Icon name='delete' />
                    </Menu.Item>
                </Menu.Menu>

                <Menu.Item
                    onClick={() => {
                        console.log("clicked")
                    }}>
                    Help
                        <Icon name='caret down' />
                </Menu.Item>
                <Menu.Menu>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        FAQ
                        <Icon name='question circle' />
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            console.log("clicked")
                        }}>
                        Support
                        <Icon name='mail' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
