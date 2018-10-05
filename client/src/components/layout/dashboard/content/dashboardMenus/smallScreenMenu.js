import React, { Component } from 'react'
import { Menu, Sidebar, Divider} from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom';

//Dashboard Content
import Details from '../businessDetails/details';
import Verify from '../verifyGift/verify';
import CreateGift from '../createGiftPage/create';
import Support from '../support/support';
import FAQ from '../faq/faq';
import Select from '../selectBusiness/select';
import Create from '../createBusiness/create';
import EditBusiness from '../editBusiness/edit';
import Delete from '../deleteBusiness/delete';

export default class SmallScreenMenu extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {

    // const children = React.Children.map(this.props.children, (child) => {
    //   return React.cloneElement(child, {
    //     handleClick: this.handleButtonClick
    //   })
    // }) // This allows you to pass props to a parents children, through this.props.children

    const { visible } = this.state

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

          <Link to="/business">
            <Menu.Item>
              My Details
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/verify">
            <Menu.Item>
              Verify My Gifts
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/gifts">
            <Menu.Item>
              Create/Modify My Page
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/support">
            <Menu.Item>
              Support
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/faq">
            <Menu.Item>
              FAQ
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/edit">
            <Menu.Item>
              Edit
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/select">
            <Menu.Item>
              Change Selected Business
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/create">
            <Menu.Item>
              Create New Business
            </Menu.Item>
          </Link>

          <Divider />

          <Link to="/business/delete">
            <Menu.Item>
              Delete A Business
            </Menu.Item>
          </Link>

        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
            <Route path="/business" exact={true} render={(props) => <Details {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/verify" exact={true} render={(props) => <Verify {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/gifts" exact={true} render={(props) => <CreateGift {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/support" exact={true} render={(props) => <Support {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/faq" exact={true} render={(props) => <FAQ {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/edit" exact={true} render={(props) => <EditBusiness {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/select" exact={true} render={(props) => <Select {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/create" exact={true} render={(props) => <Create {...props} handleClick={this.handleButtonClick}/>}/>
            <Route path="/business/delete" exact={true} render={(props) => <Delete {...props} handleClick={this.handleButtonClick}/>}/>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}