import React, { Component } from 'react'
import SmallScreenMenu from '../dashboardMenus/smallScreenMenu';
//import { chosenBusiness } from '../../../../util/logic';
import { Link } from 'react-router-dom';
import { Grid, Responsive, Segment, Loader, Breadcrumb, Button, Divider } from 'semantic-ui-react';

export default class Details extends Component {

  state = {
    business: {}
  }

  // async componentDidMount() {

  //     const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

  //     if (!Token.hasOwnProperty("userId")) {
  //       console.log("No user ID");
  //     } else {

  //       if (!Token.hasOwnProperty("currentBusiness")) {
  //         console.log("No current Business");
  //         this.setState({
  //           loading: false
  //         }, () => {
  //           this.props.history.push("/business/select");
  //         })
  //       } else {
  //         console.log("You have a business selected");
  //         this.getBusiness(Token.currentBusiness);
  //       }
  //       // try {
  //       //   const data = await hasBusiness(Token.userId)
  //       //   console.log("hasBusiness returned:", data);

  //       //   const dataLength = data.length;

  //       //     if (!dataLength) {
  //       //       console.log("No business!");
  //       //       this.setState({
  //       //         loading: false
  //       //       }, () => {
  //       //         this.props.history.push("/createbusiness")
  //       //       })
  //       //     } else if (dataLength === 1) {
  //       //       console.log("One business");
  //       //       this.getBusiness(this.state.businessArray[0]);
  //       //     } else {
  //       //       console.log("More than one business")
  //       //     }
  //       // } catch (e) {
  //       //   console.log(e);
  //       // }
  //     }
  //   }

  //   getBusiness = async (businessId) => {
  //     try {
  //       const data = await chosenBusiness(businessId)
  //       this.setState({
  //         business: data[0]
  //       }, () => {
  //         console.log(data[0]);
  //       })
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  render() {
    return (
      <Segment.Group className='shadow'>
        <Segment tertiary>
          <Button circular icon='content' color='blue' className='menuButton'/>
          <Breadcrumb size='big'>
            <Link to='/'>
              <Breadcrumb.Section>Home</Breadcrumb.Section>
            </Link>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section active>My Business</Breadcrumb.Section>
          </Breadcrumb>
        </Segment>
        <Segment>
          {this.state.business.businessName}
        </Segment>
      </Segment.Group>
    )
  }
}
