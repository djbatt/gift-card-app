import React, { Component } from 'react'
import { Grid, Responsive, Segment, Form, Header, Button, Checkbox } from 'semantic-ui-react';
import States from './createBusinessJson/stateList';
import Months from './createBusinessJson/months';
import API from '../../util/API';

export default class CreateBusiness extends Component {

    state = {
        businessName: '',
        businessAddress: '',
        firstName: '',
        lastName: '',
        uId: '',
        agreed: null
    }

    componentDidMount() {
        this.setState({
            uId: this.props.uId
        })

        console.log(this.props);
    }

    handleBioChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })

        console.log(this.state)
    }

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.agreed) {
            if (this.state.businessName && this.state.businessAddress && this.state.firstName && this.state.lastName) {
                API.saveBusiness({
                    businessName: this.state.businessName,
                    businessAddress: this.state.businessAddress,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    user: this.state.uId
                }).then(res => {
                    console.log(res.data._id);
                    API.addBusinessToUser(this.state.uId, res.data._id)
                    .then(() => this.props.update())
                    .catch(err => {
                        console.log(err);
                    })
                }).catch(err => {
                    console.log(err);
                })
            }
        } else {
            alert("You need to agree to the terms!");
        }
    }
    

    setAgreed = event => {
        event.preventDefault();

        this.setState({
            agreed: true
        })

        console.log(this.state.agreed);
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column as={Responsive}>
                        <Segment color='green'>
                            <Form>
                                <Form.Group>
                                    <Form.Input
                                        name='businessName'
                                        value={this.state.businessName}
                                        onChange={this.handleBioChange}
                                        width={10}
                                        label='Your Business Name'
                                        placeholder='Your Business Name' />

                                    <Form.Input
                                        name='businessAddress'
                                        value={this.state.businessAddress}
                                        onChange={this.handleBioChange}
                                        width={6}
                                        label='Business Address'
                                        placeholder='Business Address' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange={this.handleBioChange}
                                        width={8}
                                        label='First Name'
                                        placeholder='First Name' />
                                    <Form.Input width={8}
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange={this.handleBioChange}
                                        label='Last Name'
                                        placeholder='Last Name' />
                                </Form.Group>
                                <Header
                                    icon='credit card'
                                    content='Billing Information' />
                                <Form.Group>
                                    <Form.Input
                                        width={10}
                                        label='Billing Address'
                                        placeholder='Billing Address' />
                                    <Form.Input
                                        width={3}
                                        label='Appartment #'
                                        placeholder='Appartment #' />
                                    <Form.Dropdown
                                        closeOnChange
                                        selection
                                        options={States}
                                        label='State'
                                        placeholder='State' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                        width={6}
                                        label='Name On Card'
                                        placeholder='Name On Card' />
                                    <Form.Input
                                        width={3}
                                        label='Card #'
                                        placeholder='Card #' />
                                    <Form.Input
                                        width={2}
                                        label='CVC'
                                        placeholder='CVC' />
                                    <Form.Dropdown
                                        closeOnChange
                                        selection
                                        options={Months}
                                        label='Month'
                                        placeholder='Month' />
                                    <Form.Input
                                        width={2}
                                        label={'test'}
                                        maxLength="4"
                                        placeholder='Year' />
                                </Form.Group>
                                <Form.Group>
                                    <Checkbox
                                    onClick={this.setAgreed}
                                        className='createBusinessCheck'
                                        label='I agree to the Terms and Conditions' />
                                </Form.Group>
                                <Button positive onClick={this.handleFormSubmit} type='submit'>Submit</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
