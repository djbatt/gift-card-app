import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import GiftPreview from './giftPreview';
import { CirclePicker } from 'react-color';
import { Responsive, Form, Dropdown, Popup, Header, Loader, Button, Divider, Grid} from 'semantic-ui-react';
import API from '../../../../util/API';
import States from '../../../../util/JSON/stateList';

export default class Edit extends Component {

    state = {
        business: {},
        loading: true,
        isOpen: false
    }

    async componentDidMount() {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        if (!Token.hasOwnProperty("userId")) {
            console.log("No user ID");
        } else {

            if (!Token.hasOwnProperty("currentBusiness")) {
                console.log("No current Business");
                this.setState({
                    loading: false
                }, () => {
                    this.props.history.push("/dashboard/select");
                })
            } else {
                console.log("You have a business selected");
                this.getBusiness(Token.currentBusiness);
            }
        }
    }

    getBusiness = async (id) => {
        try {
            const res = await API.getBusiness(id)

            console.log(`This is your response`);
            console.log(res.data);
            console.log("=============================================");
            this.setState({
                business: res.data[0],
                loading: false,
                colorOne: res.data[0].colorOne,
                colorTwo: res.data[0].colorTwo
            }, () => {
                console.log("State on load", this.state)
            })
        } catch (e) {
            console.log(e);
        }
    }

    deleteCurrentBusiness = async () => {
        try {
            const res = await API.deleteBusiness(this.state.business._id)

            console.log(`This is your response`);
            console.log(res.data);
            console.log("=============================================");
            this.props.history.push("/dashboard/select")
        } catch (e) {
            console.log(e);
        }
    };

    defaultColors = () => {
        const business = this.state.business;
        business.colorOne = '#f6f6f6';
        business.colorTwo = '#e9e9e9';

        this.forceUpdate();
    }

    handleChangeColorOne = (color) => {
        const business = this.state.business;
        business.colorOne = color.hex;

        this.forceUpdate();
        
        console.log(this.state)
    };

    handleChangeColorTwo = (color) => {
        const business = this.state.business;
        business.colorTwo = color.hex;

        this.forceUpdate();
        
        console.log(this.state)
        //this.setState({ colorTwo: color.hex }, console.log(this.state));
    };

    handleChange = (e, { name, value }) => {
        const business = this.state.business;
        business[name] = value

        this.forceUpdate();

        console.log(this.state.business)
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    };

    handleClose = () => {
        this.setState({ isOpen: false })
    };

    updateBusiness = async () => {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        try {
            const save = await API.updateBusiness(this.state.business._id, this.state.business)
            console.log("Business saved", save)
            this.getBusiness(Token.currentBusiness);
        } catch (e) {
            console.log(e)
        }
    } 

    render() {



        const ifLoading = this.state.loading ? (
            <Responsive>
                <Loader size='massive' active inline='centered'>Loading Content</Loader>
            </Responsive>
        ) : (
                <Responsive>

                    <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout} handler={this.props.handler}/>
                    <Divider />
                    <Grid padded>
                        <Grid.Row>
                            <Grid.Column widescreen={8} largeScreen={8} computer={16} tablet={16} mobile={16}>
                                <Form>
                                    <Header
                                        icon='info circle'
                                        content='Business Information' />
                                    <Divider />
                                    <Form.Group>
                                        <Form.Input
                                            name='businessName'
                                            value={this.state.business.businessName}
                                            onChange={this.handleChange}
                                            width={8}
                                            label='Your Business Name'
                                            placeholder='Best Business Inc' />

                                        <Form.Input
                                            name='businessAddress'
                                            value={this.state.business.businessAddress}
                                            onChange={this.handleChange}
                                            width={8}
                                            label='Street Address'
                                            placeholder='1234 Business Rd' />

                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Input
                                            name='businessPostal'
                                            value={this.state.business.businessPostal}
                                            onChange={this.handleChange}
                                            width={6}
                                            label='Postal Code'
                                            placeholder='12345' />
                                        <Form.Input
                                            name='businessCity'
                                            value={this.state.business.businessCity}
                                            onChange={this.handleChange}
                                            width={6}
                                            label='City'
                                            placeholder='Richmond' />
                                        <Form.Field width={6}>
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
                                        <Form.Input
                                            name='businessFirst'
                                            value={this.state.business.businessFirst}
                                            onChange={this.handleChange}
                                            width={6}
                                            label='First Name'
                                            placeholder='John' />
                                        <Form.Input
                                            name='businessLast'
                                            value={this.state.business.businessLast}
                                            width={6}
                                            onChange={this.handleChange}
                                            label='Last Name'
                                            placeholder='Doe' />
                                        <Form.Input
                                            name='businessEmail'
                                            value={this.state.business.businessEmail}
                                            onChange={this.handleChange}
                                            width={6}
                                            label='Business Email'
                                            placeholder='johndoe@examplemail.com' />
                                    </Form.Group>
                                    <Form.Group>

                                        <Form.Input
                                            name='businessWork'
                                            value={this.state.business.businessWork}
                                            onChange={this.handleChange}
                                            fluid
                                            width={4}
                                            label='Work Phone'
                                            placeholder='1234567890' />
                                        <Form.Input
                                            name='businessCell'
                                            value={this.state.business.businessCell}
                                            onChange={this.handleChange}
                                            width={4}
                                            label='Cell Phone'
                                            placeholder='1234567890' />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Form.Field>
                                            <Button color='blue' floated='left' type='submit' onClick={this.updateBusiness}>Save Business</Button>
                                            <Popup
                                                trigger={<Button negative floated='right' type='submit' onClick={this.handleOpen}>Delete Business</Button>}
                                                open={this.state.isOpen}
                                                on='click'
                                                onClose={this.handleClose}
                                                onOpen={this.handleOpen}
                                                content={
                                                    <div>
                                                        <label>Are you sure?</label>
                                                        <Divider />
                                                        <Grid columns='equal'>

                                                            <Grid.Column>
                                                                <Button positive onClick={this.handleClose} type='submit'>No</Button>
                                                            </Grid.Column>
                                                            <Grid.Column>
                                                                <Button negative onClick={() => {
                                                                    this.handleClose();
                                                                    this.deleteCurrentBusiness();
                                                                }} type='submit'>Yes</Button>
                                                            </Grid.Column>
                                                        </Grid>
                                                    </div>
                                                } />
                                        </Form.Field>
                                    </Form.Group>
                                    <Header icon='camera retro' content='Change Your Colors' />
                                    <Divider />
                                    <Form.Group>
                                        <Form.Field>
                                            <label>Color One</label>
                                            <CirclePicker className='picker' color={this.state.business.colorOne} onChangeComplete={this.handleChangeColorOne} />

                                        </Form.Field>
                                        <Form.Field>
                                            <label>Color Two</label>
                                            <CirclePicker className='picker' color={this.state.business.colorTwo} onChangeComplete={this.handleChangeColorTwo} />
                                        </Form.Field>
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Form.Field>
                                        <Button color='blue' floated='right' onClick={this.defaultColors}>Default Colors</Button>
                                        </Form.Field>
                                    </Form.Group>
                                </Form>
                            </Grid.Column>
                            <Grid.Column widescreen={8} largeScreen={8} computer={16} tablet={16} mobile={16}>
                                <Header block>View Your Gift Before You Send It!</Header>
                                <GiftPreview businessName={this.state.business.businessName} colorOne={this.state.business.colorOne} colorTwo={this.state.business.colorTwo} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>
            )

        return (
            <div>
                {ifLoading}
            </div>
        )
    }
}
