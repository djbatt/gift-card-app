import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class WideScreenMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state || {}

        return (
            <Menu vertical>
                <Menu.Item as='div'>
                    <Menu.Header>{this.props.businessName}</Menu.Header>

                    <Menu.Menu>
                        <Link to="/business/details">
                            <Menu.Item as='div'
                                name='details'
                                active={activeItem === 'details'}
                                onClick={this.handleItemClick}
                                content='My Details'
                            />
                        </Link>

                        <Link to="/business/verify">
                            <Menu.Item as='div'
                                name='verify'
                                active={activeItem === 'verify'}
                                onClick={this.handleItemClick}
                                content='Verify My Gifts'
                            />
                        </Link>

                        <Link to="/business/gifts">
                            <Menu.Item as='div'
                                name='page'
                                active={activeItem === 'page'}
                                onClick={this.handleItemClick}
                                content='Create/Modify My Page'
                            />
                        </Link>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item as='div'>
                    <Menu.Header>Support</Menu.Header>
                    <Menu.Menu>
                        <Link to="/business/support">
                            <Menu.Item as='div'
                                name='support'
                                active={activeItem === 'support'}
                                onClick={this.handleItemClick}
                                content='Email Support'
                            />
                        </Link>

                        <Link to="/business/faq">
                            <Menu.Item as='div'
                                name='faq'
                                active={activeItem === 'faq'}
                                onClick={this.handleItemClick}
                                content='FAQ'
                            />
                        </Link>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}