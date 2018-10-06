import React, { Component } from 'react'
import { Image, Label, Grid, Button} from 'semantic-ui-react';
import Images from './images'

export default class PickDesign extends Component {

  render() {

    const label = (image) => (<Label ribbon color='blue' content={image.name}/>)
    const allList = Images.all.map((image) =>
    <div className='imageColumn'
    key={image.key}>
    <Button onClick={() => this.props.choice(image.key)}>
    <Image
    size='medium'
    label={label(image)}
    src={image.img}/></Button>
    </div>)
    //console.log("Images json gives us", Images.all)
    return (
      <Grid centered>
        {allList}
      </Grid>
    )
  }
}
