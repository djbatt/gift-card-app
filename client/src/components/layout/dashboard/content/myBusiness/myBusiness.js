import React, { Component } from 'react'
import { findBusiness } from '../../../../util/logic';
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Divider, Responsive, Loader } from 'semantic-ui-react';

export default class MyBusiness extends Component {

  state = {
    business: {}
  }

  async componentDidMount() {

    console.log("Path", this.props.match)

    const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

    if (!Token.hasOwnProperty("userId")) {
      console.log("No user ID");
    } else {

      if (!Token.hasOwnProperty("currentBusiness")) {
        console.log("No current Business");
        this.setState({
          loading: false
        }, () => {
          this.props.history.push("/dashboard/select");
        })
      } else {
        console.log("You have a business selected");
        this.getBusiness(Token.currentBusiness);
      }
      // try {
      //   const data = await hasBusiness(Token.userId)
      //   console.log("hasBusiness returned:", data);

      //   const dataLength = data.length;

      //     if (!dataLength) {
      //       console.log("No business!");
      //       this.setState({
      //         loading: false
      //       }, () => {
      //         this.props.history.push("/createbusiness")
      //       })
      //     } else if (dataLength === 1) {
      //       console.log("One business");
      //       this.getBusiness(this.state.businessArray[0]);
      //     } else {
      //       console.log("More than one business")
      //     }
      // } catch (e) {
      //   console.log(e);
      // }
    }
  }

  getBusiness = async (businessId) => {
    try {
      const data = await findBusiness(businessId)
      this.setState({
        business: data[0],
        loading: false
      }, () => {
        console.log(data[0]);
      })
    } catch (e) {
      console.log(e);
    }
  }

  goToGiftPage = () => {

  }

  render() {

    const yourURl = `Your url is ${window.location.hostname}:3000/gift/${this.state.business._id}`

    const ifLoading = this.state.loading ? (
      <Responsive>
        <Loader size='massive' active inline='centered'>Loading Content</Loader>
      </Responsive>
    ) : (
        <Responsive>

          <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout}/>
          <Divider />
          <span>{yourURl}</span>
        </Responsive>
      )

    return (
      <div>
        {ifLoading}
      </div>
    )
  }
}
