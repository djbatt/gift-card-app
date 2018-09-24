import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import SmallScreenNav from "./smallScreenTopNav"

export default class SmallScreenMenu extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <Responsive maxWidth={1200}>

        <Sidebar.Pushable as={Segment} color='teal'>
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

          <Link to="/business/details">
            <Menu.Item>
              <Icon name='list layout' />
              My Details
            </Menu.Item>
          </Link>

          <Link to="/business/verify">
            <Menu.Item>
              <Icon name='barcode' />
              Verify My Gifts
            </Menu.Item>
          </Link>

          <Link to="/business/gifts">
            <Menu.Item>
              <Icon name='cogs' />
              Create/Modify My Page
            </Menu.Item>
          </Link>

          <Link to="/business/support">
            <Menu.Item>
              <Icon name='compose' />
              Support
            </Menu.Item>
          </Link>

          <Link to="/business/faq">
            <Menu.Item>
              <Icon name='tasks' />
              FAQ
            </Menu.Item>
          </Link>

          </Sidebar>

          <Sidebar.Pusher>
              <SmallScreenNav Click={this.handleButtonClick}/>
              {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}