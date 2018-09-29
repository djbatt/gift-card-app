import React, { Component } from 'react'
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/dashboard/smallScreenSideNav';
import WideScreenMenu from "../layout/dashboard/wideSideMenu";
import Lipsum from '../util/lipsum';
import { ifToken, hasBusiness } from '../util/logic';
import Spinner from '../layout/spinner'

export default class Business extends Component {

  state = {
    uid: '',
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
      if (!data.hasBusiness) {
        this.props.history.push("/createbusiness/" + this.state.uid);
      }
      this.setState({
        loading: false
      })
    } catch (e) {
      console.log(e);
    }
    console.log(this.props.history)
  }

  render() {

    const ifLoading = this.state.loading ? (
      <Spinner/>
    ) : (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
              <WideScreenMenu />
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
