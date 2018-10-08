import React, { Component } from 'react'
import { Image, Label, Grid, Button } from 'semantic-ui-react';
import Images from './images'

export default class PickDesign extends Component {

  state = {
    activeItem: null
  }

  handleDesignClick = (key) => this.setState({ activeItem: key });

  render() {

    const { activeItem } = this.state

    const label = (image) => (<Label ribbon color='blue' content={image.name}/>)
    const allList = Images.all.map((image) =>
    <div className='imageColumn'
    key={image.key}>
    <Button active={activeItem === image.key} onClick={() => this.handleDesignClick(image.key)}>
    <Image
    fluid
    label={label(image)}
    src={image.img}/></Button>
    </div>)
    //console.log("Images json gives us", Images.all)
    return (
      <Grid centered style={{overflow: 'auto', maxHeight: 500}}>
        {allList}
      </Grid>
    )
  }
}
