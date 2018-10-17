import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import GiftPreview from './giftPreview';
import { Link } from 'react-router-dom';
import { CirclePicker } from 'react-color';
import { Responsive, Form, Dropdown, Popup, Header, Loader, Button, Divider, Grid, Icon } from 'semantic-ui-react';
import API from '../../../../util/API';
import States from '../../../../util/JSON/stateList';

export default class Edit extends Component {

    state = {
        business: {},
        loading: true,
        isOpen: false,
        serviceArray: [],
        serviceOptions: [{
            text: "No Service Yet",
            key: "noServ",
            value: "noServ"
        }],
        categoryArray: [{
            text: "No Cat Yet",
            key: "noCat",
            value: "noCat"
        }],
        selectedService: null,
        fullSelectedService: {
            serviceCategory: '',
            serviceName: '',
            serviceDescription: '',
            servicePrice: 0
        }
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
                await this.getBusiness(Token.currentBusiness);
                await this.getServices(Token.currentBusiness);
                await this.setServiceOptions();
                await this.setCategoryArray();

                this.setState({
                    loading: false
                })
            }
        }
    };

    getBusiness = async (id) => {
        try {
            const res = await API.getBusiness(id)

            console.log(`This is your response`);
            console.log(res.data);
            console.log("=============================================");
            this.setState({
                business: res.data[0]
            }, () => {
                console.log("State on load", this.state)
            })
        } catch (e) {
            console.log(e);
        }
    };

    getServices = async (id) => {
        try {
            const services = await API.getServices(id)

            if (!services.data.length) {
                console.log("No services")
            } else {
                await this.setState({
                    serviceArray: services.data
                })

            }
        } catch (e) {
            console.log(e)
        }
    };

    setServiceOptions = async () => {
        const serviceOptionsLocalScope = []
        for (var i = 0; i < this.state.serviceArray.length; i++) {
            serviceOptionsLocalScope.push({
                text: this.state.serviceArray[i].serviceName,
                key: this.state.serviceArray[i]._id,
                value: this.state.serviceArray[i]._id
            });
        }

        await this.setState({
            serviceOptions: serviceOptionsLocalScope
        }, () => {
            console.log("After service options set", this.state)
        })
    };

    setCategoryArray = async () => {
        const categoryArrayLocalScope = []

        for (var i = 0; i < this.state.serviceArray.length; i++) {
            categoryArrayLocalScope.push({
                text: this.state.serviceArray[i].serviceCategory,
                key: this.state.serviceArray[i].serviceCategory,
                value: this.state.serviceArray[i].serviceCategory
            });
        }
        await this.setState({
            categoryArray: categoryArrayLocalScope
        }, () => {
            this.getServices();
        })
    };

    //Color Functions

    defaultColors = () => {
        const business = this.state.business;
        business.colorOne = '#f6f6f6';
        business.colorTwo = '#e9e9e9';
        business.colorThree = '#4183c4';

        this.forceUpdate();
    }

    handleChangeColorOne = (color) => {
        const business = this.state.business;
        business.colorOne = color.hex;

        this.forceUpdate();
    };

    handleChangeColorTwo = (color) => {
        const business = this.state.business;
        business.colorTwo = color.hex;

        this.forceUpdate();
        //this.setState({ colorTwo: color.hex }, console.log(this.state));
    };

    handleChangeColorThree = (color) => {
        const business = this.state.business;
        business.colorThree = color.hex;

        this.forceUpdate();
        //this.setState({ colorTwo: color.hex }, console.log(this.state));
    };

    //Handle buttons or state changes

    handleChange = (e, { name, value }) => {
        const business = this.state.business;
        business[name] = value

        this.forceUpdate();
    };

    handleSelectedServiceChange = (e, { name, value }) => {
        const selected = this.state.fullSelectedService;
        selected[name] = value

        this.forceUpdate();
    };

    handleServiceChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    };

    handleServiceSelect = (e, { name, value }) => {
        this.setState({
            selectedService: value
        }, () => {
            this.getService(value)
        })
    };

    getService = async (id) => {
        try {
            const service = await API.getService(id)
            this.setState({
                fullSelectedService: service.data[0]
            }, () => {
                console.log(this.state.fullSelectedService)
            })
        } catch (e) {
            console.log(e)
        }
    };

    handleService = async () => {
        const serviceBody = {
            serviceCategory: this.state.serviceCategory,
            serviceName: this.state.serviceName,
            serviceDescription: this.state.serviceDescription,
            servicePrice: this.state.servicePrice,
            business: this.state.business._id
        }

        if (this.state.serviceCategory === 'noService') {
            alert("Add a service in the text box!")
        } else {

            try {
                const service = await API.addService(serviceBody)
                const localScopeServiceArray = this.state.serviceArray;

                localScopeServiceArray.push(service.data);

                this.setState({
                    serviceArray: localScopeServiceArray
                }, () => {
                    this.setCategoryArray();
                })

            } catch (e) {
                console.log(e)
            }
        }
    };

    deleteCurrentBusiness = async () => {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));
        const parsed = Token;

        delete parsed.currentBusiness;

        localStorage.setItem('okta-token-storage', JSON.stringify(parsed));


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
    };

    render() {

        const ifServices = !this.state.serviceArray.length ? (
            <div></div>
        ) : (
                <Form.Field width={5}>
                    <label>Category</label>
                    <Dropdown
                        fluid
                        onChange={this.handleServiceChange}
                        closeOnChange
                        selection
                        options={this.state.categoryArray}
                        name="serviceCategory"
                        placeholder='Category' />
                </Form.Field>
            )

        const ifSelectedService = this.state.selectedService === null ? (
            <div></div>
        ) : (
                <div>
                    <Form.Group>
                        <Form.Input
                            name='serviceCategory'
                            value={this.state.fullSelectedService.serviceCategory}
                            onChange={this.handleSelectedServiceChange}
                            width={6}
                            label='Category'
                            placeholder='Hair Services' />
                        <Form.Input
                            name='serviceName'
                            value={this.state.fullSelectedService.serviceName}
                            onChange={this.handleSelectedServiceChange}
                            width={6}
                            label='Service Name'
                            placeholder='Service Name' />
                    </Form.Group>
                    <Form.Group>

                        <Form.Input
                            name='serviceDescription'
                            value={this.state.fullSelectedService.serviceDescription}
                            width={14}
                            label='Service Description'
                            placeholder='A snippy snappy stylish cut!' />
                        <Form.Input
                            name='servicePrice'
                            value={this.state.fullSelectedService.servicePrice}
                            fluid
                            width={2}
                            label='Service Price'
                            placeholder='80' />
                    </Form.Group>
                    <br />
                    <Form.Group>

                        <Form.Field>
                            <Button color='blue' floated='left' type='submit' >Save Service</Button>
                        </Form.Field>
                    </Form.Group>
                    <br />
                </div>
            )

        const ifEditServices = !this.state.serviceArray.length ? (
            <div></div>
        ) : (
                <div>
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
                        <Form.Field>
                            <label>Color Three</label>
                            <CirclePicker className='picker' color={this.state.business.colorThree} onChangeComplete={this.handleChangeColorThree} />
                        </Form.Field>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Field>
                            <Button color='blue' floated='right' onClick={this.defaultColors}>Default Colors</Button>
                        </Form.Field>
                    </Form.Group>
                </div>
            )

        const ifSaveServices = !this.state.serviceArray.length ? (
            <div>
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
                    <Form.Field>
                        <label>Color Three</label>
                        <CirclePicker className='picker' color={this.state.business.colorThree} onChangeComplete={this.handleChangeColorThree} />
                    </Form.Field>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Field>
                        <Button color='blue' floated='right' onClick={this.defaultColors}>Default Colors</Button>
                    </Form.Field>
                </Form.Group>
            </div>

        ) : (
                <div>
                    <Header icon='pencil alternate' content='Edit Your Services' />
                    <Divider />
                    <Form.Group>
                        <Form.Field width={8}>
                            <label>Select A Service</label>
                            <Dropdown
                                fluid
                                onChange={this.handleServiceSelect}
                                closeOnChange
                                selection
                                name="selectedService"
                                options={this.state.serviceOptions}
                                placeholder='Hair Services' />
                        </Form.Field>
                    </Form.Group>
                    {ifSelectedService}

                </div>
            )



        var randomnumber = Math.floor(Math.random() * 200000) + 111111;

        const ifLoading = this.state.loading ? (
            <Responsive>
                <Loader size='massive' active inline='centered'>Loading Content</Loader>
            </Responsive>
        ) : (
                <Responsive>

                    <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout} handler={this.props.handler} />
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
                                    <Header icon='cut' content='Add Services' />
                                    <Divider />
                                    <Form.Group>
                                        <Form.Input
                                            name='serviceCategory'
                                            value={this.state.serviceCategory}
                                            onChange={this.handleServiceChange}
                                            fluid
                                            width={5}
                                            label='Category'
                                            placeholder='Hair Services' />
                                        {ifServices}
                                        <Form.Input
                                            name='serviceName'
                                            value={this.state.serviceName}
                                            onChange={this.handleServiceChange}
                                            fluid
                                            width={6}
                                            label='Service Name'
                                            placeholder='Haircut' />
                                    </Form.Group>
                                    <Form.Group>

                                        <Form.Input
                                            name='serviceDescription'
                                            value={this.state.serviceDescription}
                                            onChange={this.handleServiceChange}
                                            width={14}
                                            label='Service Description'
                                            placeholder='A snippy snappy stylish cut!' />
                                        <Form.Input
                                            name='servicePrice'
                                            value={this.state.servicePrice}
                                            onChange={this.handleServiceChange}
                                            fluid
                                            width={2}
                                            label='Service Price'
                                            placeholder='80' />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>

                                        <Form.Field>
                                            <Button color='blue' floated='left' type='submit' onClick={this.handleService}>Add Service</Button>
                                        </Form.Field>
                                    </Form.Group>
                                    <br />
                                    {ifSaveServices}
                                    <br />
                                </Form>
                            </Grid.Column>
                            <Grid.Column widescreen={8} largeScreen={8} computer={16} tablet={16} mobile={16}>
                                <Form>
                                    {ifEditServices}
                                    <Header icon='image outline' content='Preview Your Gift' />
                                    <Divider />
                                    <GiftPreview businessName={this.state.business.businessName} code={randomnumber} colorOne={this.state.business.colorOne} colorTwo={this.state.business.colorTwo} colorThree={this.state.business.colorThree} />
                                </Form>
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
