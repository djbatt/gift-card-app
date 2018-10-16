import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Sidebar} from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        handler: this.handleButtonClick
      })
    })

    return (
    <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
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
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
  }
}
