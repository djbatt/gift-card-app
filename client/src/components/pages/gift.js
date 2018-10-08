import React, { Component } from 'react'
import PickDesign from '../layout/gift/pickDesign';
import { Segment, Form, Header, Button, Checkbox, Divider, TextArea, Radio, Icon, Container, Grid } from 'semantic-ui-react';

export default class Gift extends Component {

    state = {
        gift: '',
        design: '',
        delivery: '',
        recipientEmail: '',
        recipientName: '',
        title: '',
        message: '',
        to: '',
        from: '',
        sourceEmail: '',
        sourcePhone: '',
        sourceFirst: '',
        sourceLast: '',
        dollarAmount: '',
    }

    componentDidMount = () => {
        const pathname = this.props.match.url;
        const lastWord = pathname.match("[^/]+(?=$|$)");
        console.log(lastWord)
    }


    handleCheckBox = e => {
        console.log("handle")
    }

    handleFormSubmit = async event => {
        console.log("submit")
    }

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            //console.log(this.state)
        })
    }

    handleDesignChoice = (key) => {
        this.setState({
            design: key
        }, () => {
            console.log(this.state.design)
        })
    }

    handleDeliveryChange = (e, { value }) => {
        this.setState({
            delivery: value
        }, () => {
            console.log(this.state.value)
        })
    }

    handleGiftTypeChange = (e, { value }) => {
        this.setState({
            giftType: value
        }, () => {
            console.log(this.state.giftType)
        })
    }

    render() {

        const dollarType = this.state.giftType === 'dollar' ? (
            <Form.Input
                name='dollarAmount'
                value={this.state.dollarAmount}
                onChange={this.handleFormChange}
                width={2}
                label='Amount in $'
                placeholder='20'
            />
        ) : (
                <div></div>
            )

        const serviceType = this.state.giftType === 'service' ? (
            <Form.Field width={12}>
            </Form.Field>
        ) : (
                <div></div>
            )

        return (
            <Container className='giftContainer'>
                <Segment.Group className='shadow'>
                    <Segment tertiary>
                        <Header content='Business Name or Logo' />
                    </Segment>
                    <Segment>
                        <Form>
                            <Header
                                icon='gift'
                                content='Gift Type' />
                            <Divider />
                            <Form.Group>
                                <Form.Field>
                                    <Radio
                                        toggle
                                        label='Dollar Amount'
                                        name='radioGroup'
                                        value='dollar'
                                        checked={this.state.giftType === 'dollar'}
                                        onClick={this.handleGiftTypeChange} />
                                </Form.Field>
                                {dollarType}
                                <Form.Field>
                                    <Radio
                                        toggle
                                        label='Service'
                                        name='radioGroup'
                                        value='service'
                                        checked={this.state.giftType === 'service'}
                                        onClick={this.handleGiftTypeChange} />
                                </Form.Field>
                                {serviceType}
                            </Form.Group>
                            <Header
                                icon='eye'
                                content='Select A Design' />
                            <Divider />
                            <Form.Group>
                                <Form.Field>
                                    <PickDesign choice={this.handleDesignChoice} />
                                </Form.Field>
                            </Form.Group>
                            <Header
                                icon='paper plane outline'
                                content='Delivery Type' />
                            <Divider />
                            <Form.Group>
                                <Form.Field>
                                    <Radio
                                        toggle
                                        label='Email'
                                        name='radioGroup'
                                        value='email'
                                        checked={this.state.delivery === 'email'}
                                        onClick={this.handleDeliveryChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        toggle
                                        label='Print Now'
                                        name='radioGroup'
                                        value='print'
                                        checked={this.state.delivery === 'print'}
                                        onClick={this.handleDeliveryChange} />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        toggle
                                        label='Both'
                                        name='radioGroup'
                                        value='both'
                                        checked={this.state.delivery === 'both'}
                                        onClick={this.handleDeliveryChange} />
                                </Form.Field>
                            </Form.Group>
                            <Header
                                icon='file text'
                                content='Gift Information' />
                            <Divider />
                            <Form.Group>
                                <Form.Input
                                    name='recipientEmail'
                                    value={this.state.recipientEmail}
                                    onChange={this.handleFormChange}
                                    width={8}
                                    label='Recipient Email'
                                    placeholder='theiremail@examplemail.com' />

                                <Form.Input
                                    name='recipientName'
                                    value={this.state.recipientName}
                                    onChange={this.handleFormChange}
                                    width={8}
                                    label='Recipient Name'
                                    placeholder='Jane Doe' />
                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    name='title'
                                    value={this.state.title}
                                    onChange={this.handleFormChange}
                                    width={16}
                                    label='Title'
                                    placeholder='You deserve it' />

                            </Form.Group>
                            <Form.Group>
                                <Form.Field
                                    name='message'
                                    value={this.state.message}
                                    onChange={this.handleFormChange}
                                    control={TextArea}
                                    width={16}
                                    label='Your Message'
                                    placeholder='Happy Aniversery!, Happy Birthday!, Thanks for being such a great friend!' />
                            </Form.Group>
                            <Form.Group>

                                <Form.Input
                                    name='to'
                                    value={this.state.to}
                                    onChange={this.handleFormChange}
                                    width={8}
                                    label='To'
                                    placeholder='Jane Doe' />

                                <Form.Input
                                    name='from'
                                    value={this.state.from}
                                    onChange={this.handleFormChange}
                                    width={8}
                                    label='From'
                                    placeholder='John Doe' />

                            </Form.Group>
                            <Header
                                icon='info circle'
                                content='Your Information' />
                            <Divider />
                            <Form.Group>
                                <Form.Input
                                    name='sourceEmail'
                                    value={this.state.sourceEmail}
                                    onChange={this.handleFormChange}
                                    width={5}
                                    label='Email'
                                    placeholder='youremail@examplemail.com' />

                                <Form.Input
                                    name='sourcePhone'
                                    value={this.state.sourcePhone}
                                    onChange={this.handleFormChange}
                                    width={3}
                                    label='Phone Number'
                                    placeholder='123-456-7890' />

                                <Form.Input
                                    name='sourceFirst'
                                    value={this.state.sourceFirst}
                                    onChange={this.handleFormChange}
                                    width={4}
                                    label='First Name'
                                    placeholder='John' />

                                <Form.Input
                                    name='sourceLast'
                                    value={this.state.sourceLast}
                                    onChange={this.handleFormChange}
                                    width={4}
                                    label='Last Name'
                                    placeholder='Doe' />
                            </Form.Group>
                            <Form.Group>
                                <Checkbox
                                    onChange={this.handleCheckBox}
                                    className='createBusinessCheck'
                                    label='I agree to the Terms and Conditions' />
                            </Form.Group>
                            <Button positive onClick={this.handleFormSubmit} type='submit'>
                                <Icon name='inbox' />
                                Submit</Button>
                        </Form>
                    </Segment>
                </Segment.Group>
            </Container>
        )
    }
}
