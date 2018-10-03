import React, { Component } from 'react'
import { chosenBusiness } from '../../../../util/logic';
import { Grid, Responsive, Segment, Loader } from 'semantic-ui-react';

export default class EditBusiness extends Component {

    state = {
        business: {}
    }

    async componentDidMount() {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));
    
        
      }
    
      getBusiness = async (businessId) => {
        try {
          const data = await chosenBusiness(businessId)
          this.setState({
            business: data[0]
          }, () => {
            console.log(data[0]);
          })
        } catch (e) {
          console.log(e);
        }
      }

  render() {
    return (
      <Segment className='shadow'>
        {this.state.business.businessName}
      </Segment>
    )
  }
}
