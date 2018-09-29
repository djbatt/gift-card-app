import React, { Component } from 'react'
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/business/smallScreenSideNav';
import WideScreenMenu from "../layout/business/wideSideMenu";
import Lipsum from '../content/lipsum';
import { ifToken, hasBusiness } from '../util/logic';

export default class Business extends Component { 

state = {
  uid: ''
}

// Asynchronous function
async componentDidMount() { //Set variables
   try { //Try the function below, if it fails catch the error
      const data = await ifToken() //Wait for ifToken to finish before running the next code
      console.log("ifToken returned", data)
      this.setState({
        uid: data._id
      })
   } catch(e) {
     console.log(e);
   }

   try {
     const data = await hasBusiness(this.state.uid)
     console.log("checkBusiness returned", data);
     if (!data.hasBusiness) {
      this.props.history.push("/business/create");
     }
   } catch(e) {
     console.log(e);
   }
   console.log(this.props.history)
}

render() {
  return (
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
}
}
