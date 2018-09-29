import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class SmallScreenNav extends Component {

    render() {

        return (
            <Menu secondary>

                <Menu.Item icon='content' onClick={this.props.Click}/>

                <Menu.Item>
                    <h4>{this.props.businessName}</h4>
                </Menu.Item>

            </Menu>
        )
    }
}