import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

//Dashboard Content
import MyBusiness from '../../../dashboard/content/myBusiness/myBusiness';
import Verify from '../../../dashboard/content/verifyGift/verify';
import Edit from '../../../dashboard/content/editBusiness/edit';
import Select from '../../../dashboard/content/selectBusiness/select';
import Create from '../../../dashboard/content/createBusiness/create';
import Support from '../../../dashboard/content/support/support';
import FAQ from '../../../dashboard/content/faq/faq';

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
    <Sidebar.Pushable as={Segment}>
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
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Route path="/dashboard" exact={true} render={() => <MyBusiness {...this.props} logout={this.this.props.logout}/>}/>
            <Route path="/dashboard/verify" exact={true} render={() => <Verify {...this.props} logout={this.this.props.logout}/>}/>
            <Route path="/dashboard/edit" exact={true} render={() => <Edit {...this.props} logout={this.this.props.logout}/>}/>
            <Route path="/dashboard/select" exact={true} render={() => <Select {...this.props} logout={this.this.props.logout}/>}/>
            <Route path="/dashboard/create" exact={true} render={() => <Create {...this.props} logout={this.this.props.logout}/>}/>
            <Route path="/dashboard/support" exact={true} render={() => <Support {...this.props} logout={this.this.props.logout}/>}/>
            <Route path="/dashboard/faq" exact={true} render={() => <FAQ {...this.props} logout={this.this.props.logout}/>}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
  }
}
