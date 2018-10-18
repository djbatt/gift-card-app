import React, { Component } from 'react'
import PickDesign from '../layout/gift/pickDesign';
import { Segment, Form, Header, Button, Checkbox, Divider, TextArea, Radio, Icon, Container, Loader, Responsive } from 'semantic-ui-react';
import API from '../util/API';

export default class Gift extends Component {

    state = {
        business: {},
        loading: true,
        gift: '',
        giftType: '',
        dollarAmount: '',
        chosenCode: '',
        design: '',
        delivery: '',
        recipientEmail: '',
        recipientName: '',
        giftTitle: '',
        giftMessage: '',
        giftTo: '',
        giftFrom: '',
        sourceEmail: '',
        sourcePhone: '',
        sourceFirst: '',
        sourceLast: '',
    }

    componentDidMount = async () => {
        const pathname = this.props.match.url;
        const lastString = pathname.match("[^/]+(?=$|$)");
        try {
            const res = await API.getBusiness(lastString)

            if (!res.data.length) {
                //Push us to 404
            } else {

                console.log(`This is your response`);
                console.log(res.data);
                console.log("=============================================");
                this.setState({
                    business: res.data[0],
                    loading: false
                }, () => {
                    console.log('Business!')
                    console.log(this.state);
                })

            }
        } catch (e) {

            console.log(e)
        }
    }


    handleCheckBox = e => {
        console.log("handle")
    }


    handleFormSubmit = () => {

        var arr = []

        while (arr.length < 40000) {
            var randomnumber = Math.floor(Math.random() * 200000) + 111111;
            if (arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }

        const giftCode = arr[Math.floor(Math.random() * arr.length)];

        console.log(arr.indexOf(giftCode))

        this.setState({
            chosenCode: giftCode
        }, async () => {

            if (this.state.giftType === 'dollar') {

                const emailData = {
                    business: this.state.business,
                    recipientEmail: this.state.recipientEmail,
                    recipientName: this.state.recipientName,
                    giftTitle: this.state.giftTitle,
                    giftMessage: this.state.giftMessage,
                    giftTo: this.state.giftTo,
                    giftFrom: this.state.giftFrom,
                    sourceEmail: this.state.sourceEmail,
                    sourcePhone: this.state.sourcePhone,
                    sourceFirst: this.state.sourceFirst,
                    sourceLast: this.state.sourceLast,
                    code: this.state.chosenCode,
                    gift: `$${this.state.gift}`
                }

                try {
                    const data = await API.sendEmail(emailData)
                    console.log(data)
                } catch (e) {
                    console.log(e)
                }

            } else {
                
            }

        })
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
                name='gift'
                value={this.state.gift}
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

        const ifLoading = this.state.loading ? (
            <Responsive>
                <Loader size='massive' active inline='centered'>Loading Content</Loader>
            </Responsive>
        ) : (
                <Container className='giftContainer'>
                    <Segment.Group className='shadow'>
                        <Segment tertiary>
                            <Header content={this.state.business.businessName} />
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
                                    icon='file text'
                                    content='Gift Information' />
                                <Divider />
                                <Form.Group>
                                    <Form.Input required
                                        name='recipientEmail'
                                        value={this.state.recipientEmail}
                                        onChange={this.handleFormChange}
                                        width={8}
                                        label='Recipient Email'
                                        placeholder='theiremail@examplemail.com' />

                                    <Form.Input required
                                        name='recipientName'
                                        value={this.state.recipientName}
                                        onChange={this.handleFormChange}
                                        width={8}
                                        label='Recipient Name'
                                        placeholder='Jane Doe' />
                                </Form.Group>
                                <Form.Group>

                                    <Form.Input required
                                        name='giftTitle'
                                        value={this.state.giftTitle}
                                        onChange={this.handleFormChange}
                                        width={16}
                                        label='Title'
                                        placeholder='You deserve it' />

                                </Form.Group>
                                <Form.Group>
                                    <Form.Field required
                                        name='giftMessage'
                                        value={this.state.giftMessage}
                                        onChange={this.handleFormChange}
                                        control={TextArea}
                                        width={16}
                                        label='Your Message'
                                        placeholder='Happy Aniversery!, Happy Birthday!, Thanks for being such a great friend!' />
                                </Form.Group>
                                <Form.Group>

                                    <Form.Input required
                                        name='giftTo'
                                        value={this.state.giftTo}
                                        onChange={this.handleFormChange}
                                        width={8}
                                        label='To'
                                        placeholder='Jane Doe' />

                                    <Form.Input required
                                        name='giftFrom'
                                        value={this.state.giftFrom}
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
                                    <Form.Input required
                                        name='sourceEmail'
                                        value={this.state.sourceEmail}
                                        onChange={this.handleFormChange}
                                        width={5}
                                        label='Email'
                                        placeholder='youremail@examplemail.com' />

                                    <Form.Input required
                                        name='sourcePhone'
                                        value={this.state.sourcePhone}
                                        onChange={this.handleFormChange}
                                        width={3}
                                        label='Phone Number'
                                        placeholder='123-456-7890' />

                                    <Form.Input required
                                        name='sourceFirst'
                                        value={this.state.sourceFirst}
                                        onChange={this.handleFormChange}
                                        width={4}
                                        label='First Name'
                                        placeholder='John' />

                                    <Form.Input required
                                        name='sourceLast'
                                        value={this.state.sourceLast}
                                        onChange={this.handleFormChange}
                                        width={4}
                                        label='Last Name'
                                        placeholder='Doe' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Field required>
                                    <Checkbox
                                        onChange={this.handleCheckBox}
                                        label='I agree to the Terms and Conditions' />
                                    </Form.Field>
                                </Form.Group>
                                <Button positive onClick={this.handleFormSubmit} type='submit'>
                                    <Icon name='inbox' />
                                    Submit</Button>
                            </Form>
                        </Segment>
                    </Segment.Group>
                </Container>
            )

        return (
            <Responsive>
                {ifLoading}
            </Responsive>
        )
    }
}
