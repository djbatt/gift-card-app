import React, { Component } from 'react'
import { Menu, Sidebar, Responsive, Divider, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class SmallScreenMenu extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    const clicker = (
      <Button circular icon='content' color='blue' className='menuButton' onClick={this.handleButtonClick}/>)

    return (
      <Responsive maxWidth={1200}>

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
          
          <Divider/>

          <Link to="/business/edit">
            <Menu.Item>
              Edit
            </Menu.Item>
          </Link>
          
          <Divider/>

          <Link to="/business/select">
            <Menu.Item>
              Change Selected Business
            </Menu.Item>
          </Link>
          
          <Divider/>

          <Link to="/business/create">
            <Menu.Item>
              Create New Business
            </Menu.Item>
          </Link>
          
          <Divider/>

          <Link to="/business/delete">
            <Menu.Item>
              Delete A Business
            </Menu.Item>
          </Link>

          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}