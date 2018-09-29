import React, { Component } from 'react'
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../../layout/business/smallScreenSideNav';
import WideScreenMenu from "../../layout/business/wideSideMenu";
import Lipsum from '../lipsum';

export default class Dashboard extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
            <WideScreenMenu businessName={this.props.businessInfo.businessName}/>
          </Grid.Column>
          <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
            <SmallScreenMenu businessName={this.props.businessInfo.businessName}>
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
