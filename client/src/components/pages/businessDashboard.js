import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/dashboard/smallScreenSideNav';
import WideScreenMenu from "../layout/dashboard/wideScreenMenu";
import Lipsum from '../util/lipsum';
import { ifToken, hasBusiness, findBusiness } from '../util/logic';
import Spinner from '../layout/spinner'

export default class Business extends Component {

  state = {
    uid: '',
    businessid: '',
    businessArray: [],
    business: {},
    loading: true

  }

  // Asynchronous function
  async componentDidMount() { //Set variables
    try { //Try the function below, if it fails catch the error
      const data = await ifToken() //Wait for ifToken to finish before running the next code
      console.log("ifToken returned", data)
      this.setState({
        uid: data._id
      })
    } catch (e) {
      console.log(e);
    }

    try {
      const data = await hasBusiness(this.state.uid)
      console.log("checkBusiness returned", data);

      this.setState({
        businessArray: data
      }, () => {
        const dataLength = this.state.businessArray.length
        console.log(this.state);
        console.log(dataLength);

        if (!dataLength) {
          console.log("No business!")
          this.setState({
            loading: false
          }, () => {
            this.props.history.push("/createbusiness/" + this.state.uid);
          })
        } else if (dataLength === 1) {
          console.log("One business")
          this.setState({
            businessid: this.state.businessArray[0]
          }, () => {
            this.singleBusinessData(this.state.businessid)
          })
        } else {
          console.log("Greater than One Business")
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  singleBusinessData = async (id) => {
    try {
      const data = await findBusiness(id)
      this.setState({
        business: data[0],
        loading: false
      }, () => {
        console.log("BusinessData returned:", data[0]);
        this.props.history.push("/business");

      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    const ifLoading = this.state.loading ? (
      <Spinner />
    ) : (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
              <WideScreenMenu businessName={this.state.business.businessName} uid={this.state.uid}/>
            </Grid.Column>
            <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
              <SmallScreenMenu>
                <Lipsum />
              </SmallScreenMenu>
              <Responsive minWidth={1200}>
                <Segment color='teal'>
                  <Lipsum />
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
