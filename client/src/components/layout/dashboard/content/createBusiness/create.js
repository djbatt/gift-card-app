import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Form, Header, Button, Checkbox, Divider, Icon, Responsive, Dropdown } from 'semantic-ui-react';
import API from '../../../../util/API';
import States from '../../../../util/JSON/stateList';

export default class createBusiness extends Component {
    state = {
        businessName: '',
        businessAddress: '',
        businessPostal: '',
        businessCity: '',
        businessState: '',
        businessFirst: '',
        businessLast: '',
        businessEmail: '',
        businessWork: '',
        businessCell: '',
        user: '',
        tc: false
    }

    componentDidMount = async () => {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        if (!Token.hasOwnProperty("userId")) {
            console.log("No user ID");
        } else {
            this.setState({
                loading: false,
                user: Token.userId
            })
        }
    }

    handleCheckBox = (e) => {
        this.setState({
            tc: !this.state.tc
        })
        console.log(this.state.tc)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value }, () => {
        console.log(this.state);
    })

    handleFormSubmit = async event => {
        event.preventDefault();

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));
        const userId = Token.userId

        if (this.state.tc) {
            if (this.state.businessName &&
                this.state.businessAddress &&
                this.state.businessPostal &&
                this.state.businessCity &&
                this.state.businessState &&
                this.state.businessFirst &&
                this.state.businessLast &&
                this.state.businessEmail &&
                this.state.businessWork &&
                this.state.businessCell) {
                try {

                    const res = await API.saveBusiness(this.state)

                    console.log(`This is your response`);
                    console.log(res.data);
                    console.log("=============================================");

                    await API.addBusinessToUser(userId, res.data._id)

                    this.setLocalBusiness(res.data._id);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    setLocalBusiness = (businessID) => {
        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        const parsed = Token;

        parsed["currentBusiness"] = businessID;

        localStorage.setItem('okta-token-storage', JSON.stringify(parsed));


        console.log("Token with businessID")
        console.log(Token);
        console.log("=============================================")


        this.props.history.push("/dashboard")
    }

    render() {

        return (
            <Responsive>

                <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout} handler={this.props.handler}/>
                <Divider />
                <Form>
                    <Header
                        icon='info circle'
                        content='Business Information' />
                    <Divider />
                    <Form.Group>
                        <Form.Input required
                            name='businessName'
                            value={this.state.businessName}
                            onChange={this.handleChange}
                            width={6}
                            label='Your Business Name'
                            placeholder='Best Business Inc' />

                        <Form.Input required
                            name='businessAddress'
                            value={this.state.businessAddress}
                            onChange={this.handleChange}
                            width={6}
                            label='Street Address'
                            placeholder='1234 Business Rd' />

                    </Form.Group>
                    <Form.Group>
                        <Form.Input required
                            name='businessPostal'
                            value={this.state.businessPostal}
                            onChange={this.handleChange}
                            width={4}
                            label='Postal Code'
                            placeholder='12345' />
                        <Form.Input required
                            name='businessCity'
                            value={this.state.businessCity}
                            onChange={this.handleChange}
                            width={4}
                            label='City'
                            placeholder='Richmond' />
                        <Form.Field required width={4}>
                            <label>State</label>
                            <Dropdown
                                fluid
                                onChange={this.handleChange}
                                closeOnChange
                                selection
                                name="businessState"
                                options={States}
                                placeholder='State' />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input required
                            name='businessFirst'
                            value={this.state.businessFirst}
                            onChange={this.handleChange}
                            width={6}
                            label='First Name'
                            placeholder='John' />
                        <Form.Input required
                            name='businessLast'
                            value={this.state.businessLast}
                            width={6}
                            onChange={this.handleChange}
                            label='Last Name'
                            placeholder='Doe' />
                        <Form.Input required
                            name='businessEmail'
                            value={this.state.businessEmail}
                            onChange={this.handleChange}
                            width={6}
                            label='Business Email'
                            placeholder='johndoe@examplemail.com' />
                    </Form.Group>
                    <Form.Group>

                        <Form.Input required
                            name='businessWork'
                            value={this.state.businessWork}
                            onChange={this.handleChange}
                            fluid
                            width={4}
                            label='Work Phone'
                            placeholder='1234567890' />
                        <Form.Input
                            name='businessCell'
                            value={this.state.businessCell}
                            onChange={this.handleChange}
                            width={4}
                            label='Cell Phone'
                            placeholder='1234567890' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field required>
                        <Checkbox
                            onChange={this.handleCheckBox}
                            label='I agree to the Terms and Conditions' />

                        </Form.Field>
                    </Form.Group>

                    <Button positive onClick={this.handleFormSubmit} type='submit'>
                        <Icon name='cloud' />
                        Submit</Button>
                </Form>
            </Responsive >
        )
    }
}
