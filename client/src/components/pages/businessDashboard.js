import React, { Component } from 'react'
import { SecureRoute } from '@okta/okta-react';
import { Grid, Responsive, Segment, Loader } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/dashboard/smallScreenSideNav';
import WideScreenMenu from "../layout/dashboard/wideScreenMenu";
import Select from '../layout/dashboard/selectBusiness/select';
import Lipsum from '../util/lipsum';
import { hasBusiness, chosenBusiness } from '../util/logic';

export default class Business extends Component {

  state = {
    businessArray: [],
    business: {},
    loading: true
  }

  // Asynchronous function
  async componentDidMount() {

    const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

    if (!Token.hasOwnProperty("userId")) {
      console.log("No user ID")
    } else {
      try {
        const data = await hasBusiness(Token.userId)
        console.log("hasBusiness returned:", data);

        this.setState({
          businessArray: data
        }, () => {
          const dataLength = this.state.businessArray.length;

          if (!dataLength) {
            console.log("No business!");
            this.setState({
              loading: false
            }, () => {
              this.props.history.push("/createbusiness")
            })
          } else if (dataLength === 1) {
            console.log("One business");
            this.getBusiness(this.state.businessArray[0]);
          } else {
            console.log("More than one business")
          }
        })
      } catch (e) {
        console.log(e);
      }
    }
  }

  getBusiness = async (businessId) => {
    try {
      const data = await chosenBusiness(businessId)
      this.setState({
        business: data[0],
        loading: false
      }, () => {
        console.log(this.state);
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    const ifLoading = this.state.loading ? (
      <div>
        <Loader size='massive' active>Loading Content</Loader>
      </div>
    ) : (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
              <WideScreenMenu businessName={this.state.business.businessName} uId={this.state.uId} />
            </Grid.Column>
            <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
              <SmallScreenMenu>
                <Lipsum />
              </SmallScreenMenu>
              <Responsive minWidth={1200}>
                <Segment color='teal'>
                  <SecureRoute path="/business" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/verify" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/select" exact={true} component={Select} />
                </Segment>
              </Responsive>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    return (
      <div>
        {ifLoading}
      </div>
    )
  }
}
