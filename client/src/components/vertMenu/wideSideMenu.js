import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class WideScreenMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state || {}

        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Your Business Name</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='details'
                            active={activeItem === 'details'}
                            onClick={this.handleItemClick}
                            content='My Details'
                        />

                        <Menu.Item
                            name='verify'
                            active={activeItem === 'verify'}
                            onClick={this.handleItemClick}
                            content='Verify My Gifts'
                        />

                        <Menu.Item
                            name='page'
                            active={activeItem === 'page'}
                            onClick={this.handleItemClick}
                            content='Create/Modify My Page'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name='support'
                            active={activeItem === 'support'}
                            onClick={this.handleItemClick}
                            content='Email Support'
                        />
                        <Menu.Item
                            name='faq'
                            active={activeItem === 'faq'}
                            onClick={this.handleItemClick}
                            content='FAQ'
                        />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}