import React, { Component } from 'react'
import { Icon, Menu, Header, Sidebar, Responsive, Divider } from 'semantic-ui-react'
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

        <Sidebar.Pushable as={Header} block>
          <Sidebar
            as={Menu}
            animation='slide along'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >

          <Link to="/business">
            <Menu.Item>
              My Details
            </Menu.Item>
          </Link>

          <Divider/>

          <Link to="/business/verify">
            <Menu.Item>
              Verify My Gifts
            </Menu.Item>
          </Link>

          <Divider/>

          <Link to="/business/gifts">
            <Menu.Item>
              Create/Modify My Page
            </Menu.Item>
          </Link>
          
          <Divider/>

          <Link to="/business/support">
            <Menu.Item>
              Support
            </Menu.Item>
          </Link>
          
          <Divider/>

          <Link to="/business/faq">
            <Menu.Item>
              FAQ
            </Menu.Item>
          </Link>

          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
              <SmallScreenNav businessName={this.props.businessName} Click={this.handleButtonClick}/>
              {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}