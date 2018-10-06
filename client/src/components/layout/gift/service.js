import React, { Component } from 'react'
import { Image, Label, Grid, Button} from 'semantic-ui-react';

export default class Service extends Component {
  render() {
    return (
      <Grid centered>
        {serviceList}
      </Grid>
    )
  }
}
