import React, { Component } from 'react'
import { findBusiness } from '../../../../util/logic';
import { Link } from 'react-router-dom';
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Divider, Responsive, Loader, Header, Icon, Grid } from 'semantic-ui-react';

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

    const yourURl = `/gift/${this.state.business._id}`

    const ifLoading = this.state.loading ? (
      <Responsive>
        <Loader size='massive' active inline='centered'>Loading Content</Loader>
      </Responsive>
    ) : (
        <Responsive>

          <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout}/>
          <Divider />
          <Header block>
            <Icon name='linkify'/>
            <Header.Content><Link to={yourURl} target="_blank">Your Gift Page</Link></Header.Content>
          </Header>
          <Grid celled='internally'>
              <Grid.Column widescreen={8} largeScreen={8} computer={8} tablet={8} mobile={16} color='blue'>
              </Grid.Column>
              <Grid.Column widescreen={8} largeScreen={8} computer={8} tablet={8} mobile={16} color='red'>
              </Grid.Column>
          </Grid>
        </Responsive>
      )

    return (
      <div>
        {ifLoading}
      </div>
    )
  }
}
