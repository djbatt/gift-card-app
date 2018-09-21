import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Slidenav extends Component {
    // state = {}

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        //const { activeItem } = this.state

        return (
            <Menu secondary>

                <Menu.Item onClick={this.props.Click}>
                    <img src='https://react.semantic-ui.com/logo.png' alt='Logo' />
                </Menu.Item>

            </Menu>
        )
    }
}