import React, { Component } from 'react';
import API from '../../../../util/API';
import { Link } from 'react-router-dom';
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Divider, Responsive, Loader, Header, Icon, Grid } from 'semantic-ui-react';

export default class MyBusiness extends Component {

  state = {
    business: {}
  }

  async componentDidMount() {

    console.log("Path", this.props)

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
    }
  }

  getBusiness = async (id) => {
    try {
      const res = await API.getBusiness(id)
  
      console.log(`This is your response`);
      console.log(res.data);
      console.log("=============================================");
      this.setState({
        business: res.data[0],
        loading: false
      }, () => {
        console.log(res.data[0]);
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    const yourURl = `/gift/${this.state.business._id}`

    const ifLoading = this.state.loading ? (
      <Responsive>
        <Loader size='massive' active inline='centered'>Loading Content</Loader>
      </Responsive>
    ) : (
        <Responsive>
          <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout} handler={this.props.handler}/>
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
