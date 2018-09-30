import React, { Component } from 'react'
import { Grid, Responsive, Segment, Form, Header, Button, Checkbox } from 'semantic-ui-react';
import addBusiness from '../util/logic/addBusiness';    
import States from '../util/JSON/stateList';
import Months from '../util/JSON/months';

export default class createBusiness extends Component {
    state = {
        businessName: '',
        streetAddress: '',
        firstName: '',
        lastName: '',
        eMail: '',
        businessPhone: '',
        cellPhone: '',
        user: '',
        tc: false
    }

    componentDidMount() {
        const path = this.props.history.location.pathname;
        const regexPath = path.match("[^/]+(?=$|$)");
        const uId = regexPath[0];

        this.setState({
            user: uId
        }, () => {
            console.log(this.state);
        })
    }

    handleCheckBox = (e) => {
        this.setState({
            tc: !this.state.tc
        })
        console.log(this.state.tc)
    }

    handleBioChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();

        if (this.state.tc) {
            if (this.state.businessName &&
                this.state.streetAddress &&
                this.state.firstName &&
                this.state.lastName &&
                this.state.eMail &&
                this.state.businessPhone &&
                this.state.cellPhone) {
                    try {
                        const data = await addBusiness(this.state);
                        console.log("success", data);
                        this.props.history.push("/business");
                    } catch (e) {
                        console.log(e);
                    }
                }
        }
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
                                        width={8}
                                        label='Your Business Name'
                                        placeholder='Your Business Name' />

                                    <Form.Input
                                        name='streetAddress'
                                        value={this.state.streetAddress}
                                        onChange={this.handleBioChange}
                                        width={8}
                                        label='Street Address'
                                        placeholder='Street Address' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange={this.handleBioChange}
                                        width={8}
                                        label='First Name'
                                        placeholder='First Name' />
                                    <Form.Input
                                        name='lastName'
                                        value={this.state.lastName}
                                        width={8}
                                        onChange={this.handleBioChange}
                                        label='Last Name'
                                        placeholder='Last Name' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                        name='eMail'
                                        value={this.state.eMail}
                                        onChange={this.handleBioChange}
                                        width={8}
                                        label='Email'
                                        placeholder='Email' />
                                    <Form.Input
                                        name='businessPhone'
                                        value={this.state.businessPhone}
                                        onChange={this.handleBioChange}
                                        width={4}
                                        label='Work Phone'
                                        placeholder='Work Phone' />
                                    <Form.Input
                                        name='cellPhone'
                                        value={this.state.cellPhone}
                                        onChange={this.handleBioChange}
                                        width={4}
                                        label='Cell Phone'
                                        placeholder='Cell Phone' />
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
                                        onChange={this.handleCheckBox}
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
