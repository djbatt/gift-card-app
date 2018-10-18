import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import GiftPreview from './giftPreview';
import { CirclePicker } from 'react-color';
import { Responsive, Form, Dropdown, Popup, Header, Loader, Button, Divider, Grid } from 'semantic-ui-react';
import API from '../../../../util/API';
import States from '../../../../util/JSON/stateList';

export default class Edit extends Component {

    state = {
        business: {},
        category: '',
        serviceName: '',
        serviceDescription: '',
        servicePrice: '',
        serviceArray: [],
        serviceOptionsArray: [],
        categoryArray: [],
        categoryOptionsArray: [],
        selectedService: null,
        loading: true,
        isOpen: false,
        inCategory: false
    }

    async componentDidMount() {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));



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
            await this.getCategories(Token.currentBusiness);
            //await this.setServiceOptions();
            //await this.setCategoryArray();

            this.setState({
                loading: false
            }, () => {
                console.log('state on cdm', this.state);
            })
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
            })
        } catch (e) {
            console.log("get business error", e);
        }
    };

    handleBusinessChange = (e, { name, value }) => {
        const business = this.state.business;
        business[name] = value

        this.forceUpdate();
    };

    handleOpen = () => {
        this.setState({ isOpen: true })
    };

    handleClose = () => {
        this.setState({ isOpen: false })
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

    handleServiceChange = (e, { name, value, key }) => {
        this.setState({
            [name]: value
        })
    };

    catCheck = async () => {


        for (var i = 0; i < this.state.categoryArray.length; i++) {
            if (this.state.categoryArray[i].category === this.state.category) {

                this.setState({
                    inCategory: true
                }, () => {
                    this.addService();
                })
            } else {
                this.addService();
            }
        }
    }

    addService = async () => {

        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));


        if (this.state.inCategory === false) {
            try {


                const categoryBody = {
                    category: this.state.category,
                    business: this.state.business._id
                }

                const serviceBody = {
                    serviceName: this.state.serviceName,
                    serviceDescription: this.state.serviceDescription,
                    servicePrice: this.state.servicePrice,
                    business: this.state.business._id
                }
                const Category = await API.addCategory(categoryBody);
                console.log(Category.data)
                const Service = await API.addService(serviceBody)
                console.log(Service.data)

                const adctsBody = {
                    categoryId: Category.data._id,
                    serviceId: Service.data._id
                }

                const adstcBody = {
                    serviceId: Service.data._id,
                    categoryId: Category.data._id
                }

                const adcts = await API.addCategoryToService(adctsBody)
                console.log(adcts);
                const adstc = await API.addServiceToCategory(adstcBody)
                console.log(adstc);

                this.setState({
                    category: '',
                    serviceName: '',
                    serviceDescription: '',
                    servicePrice: ''
                }, () => {
                    this.getServices(Token.currentBusiness)
                })

            } catch (e) {
                console.log("add service error", e)
            }
        } else {
            try {
                const singleCategory = await API.getCatByName(Token.currentBusiness, this.state.category)
                console.log(singleCategory);

                const serviceBody = {
                    category: singleCategory.data[0]._id,
                    serviceName: this.state.serviceName,
                    serviceDescription: this.state.serviceDescription,
                    servicePrice: this.state.servicePrice,
                    business: this.state.business._id
                }

                const Service = await API.addService(serviceBody)
                console.log(Service.data)

                const adctsBody = {
                    categoryId: singleCategory.data[0]._id,
                    serviceId: Service.data._id
                }

                const adstcBody = {
                    serviceId: Service.data._id,
                    categoryId: singleCategory.data[0]._id
                }

                const adcts = await API.addCategoryToService(adctsBody)
                console.log(adcts);
                const adstc = await API.addServiceToCategory(adstcBody)
                console.log(adstc);
                
                this.setState({
                    category: '',
                    serviceName: '',
                    serviceDescription: '',
                    servicePrice: ''
                }, () => {
                    this.getServices(Token.currentBusiness)
                })

            } catch (e) {
                console.log(e);
            }
        }
    };

    getServices = async (id) => {
        try {
            const services = await API.getServices(id)

            if (!services.data.length) {
                console.log("No services")
            } else {
                this.setState({
                    serviceArray: services.data
                }, () => {
                    this.serviceOptions();
                })

            }
        } catch (e) {
            console.log(e)
        }
    };

    getCategories = async (id) => {
        try {
            const categories = await API.getCategories(id)

            if (!categories.data.length) {
                console.log("No cats")
            } else {
                this.setState({
                    categoryArray: categories.data
                }, () => {
                    this.categoryOptions();
                })
            }
        } catch (e) {
            console.log(e);
        }
    };

    categoryOptions = async () => {
        const localScopeArray = [];

        for (var i = 0; i < this.state.categoryArray.length; i++) {
            localScopeArray.push({
                text: this.state.categoryArray[i].category,
                key: this.state.categoryArray[i]._id,
                value: this.state.categoryArray[i].category
            })
        }

        this.setState({
            categoryOptionsArray: localScopeArray
        });
    };

    serviceOptions = async () => {
        const localScopeArray = [];

        for (var i = 0; i < this.state.serviceArray.length; i++) {
            localScopeArray.push({
                text: this.state.serviceArray[i].serviceName,
                key: this.state.serviceArray[i]._id,
                value: this.state.serviceArray[i]._id
            })
        }

        this.setState({
            serviceOptionsArray: localScopeArray
        });
    };

    getService = async (e, { name, value }) => {
        try {
            const service = await API.getService(value)
            this.setState({
                selectedService: service.data[0]
            }, () => {
                console.log(this.state.selectedService);
            })
        } catch (e) {
            console.log("get service error", e)
        }
    };

    handleSelectedChange = (e, { name, value }) => {
        const selectedService = this.state.selectedService;

        selectedService[name] = value;

        this.forceUpdate();
    }

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
    };

    handleChangeColorThree = (color) => {
        const business = this.state.business;
        business.colorThree = color.hex;

        this.forceUpdate();
    };

    render() {

        const ifCategories = !this.state.categoryArray.length ? (
            <div />
        ) : (
                <Form.Field width={5}>
                    <label>Category</label>
                    <Dropdown
                        fluid
                        onChange={this.handleServiceChange}
                        closeOnChange
                        selection
                        options={this.state.categoryOptionsArray}
                        name='category'
                        placeholder='Category' />
                </Form.Field>
            );

        const ifServices = !this.state.serviceArray.length ? (
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
                        <Form.Field width={6}>
                            <label>Select A Service</label>
                            <Dropdown
                                fluid
                                onChange={this.getService}
                                closeOnChange
                                selection
                                options={this.state.serviceOptionsArray}
                                placeholder='Hair Services' />
                        </Form.Field>
                    </Form.Group>
                </div>
            );

        const ifEdit = !this.state.serviceArray.length ? (
            <div />
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

        const ifSelectedService = this.state.selectedService === null ? (
            <div></div>
        ) : (
                <div>
                    <Form.Group>
                        <Form.Input
                            name='serviceName'
                            value={this.state.selectedService.serviceName}
                            onChange={this.handleSelectedChange}
                            width={6}
                            label='Service Name'
                            placeholder='Service Name' />
                    </Form.Group>
                    <Form.Group>

                        <Form.Input
                            name='serviceDescription'
                            value={this.state.selectedService.serviceDescription}
                            onChange={this.handleSelectedChange}
                            width={12}
                            label='Service Description'
                            placeholder='A snippy snappy stylish cut!' />
                        <Form.Input
                            name='servicePrice'
                            value={this.state.selectedService.servicePrice}
                            onChange={this.handleSelectedChange}
                            fluid
                            width={4}
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
                                            onChange={this.handleBusinessChange}
                                            width={8}
                                            label='Your Business Name'
                                            placeholder='Best Business Inc' />

                                        <Form.Input
                                            name='businessAddress'
                                            value={this.state.business.businessAddress}
                                            onChange={this.handleBusinessChange}
                                            width={8}
                                            label='Street Address'
                                            placeholder='1234 Business Rd' />

                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Input
                                            name='businessPostal'
                                            value={this.state.business.businessPostal}
                                            onChange={this.handleBusinessChange}
                                            width={6}
                                            label='Postal Code'
                                            placeholder='12345' />
                                        <Form.Input
                                            name='businessCity'
                                            value={this.state.business.businessCity}
                                            onChange={this.handleBusinessChange}
                                            width={6}
                                            label='City'
                                            placeholder='Richmond' />
                                        <Form.Field width={6}>
                                            <label>State</label>
                                            <Dropdown
                                                fluid
                                                onChange={this.handleBusinessChange}
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
                                            onChange={this.handleBusinessChange}
                                            width={6}
                                            label='First Name'
                                            placeholder='John' />
                                        <Form.Input
                                            name='businessLast'
                                            value={this.state.business.businessLast}
                                            width={6}
                                            onChange={this.handleBusinessChange}
                                            label='Last Name'
                                            placeholder='Doe' />
                                        <Form.Input
                                            name='businessEmail'
                                            value={this.state.business.businessEmail}
                                            onChange={this.handleBusinessChange}
                                            width={6}
                                            label='Business Email'
                                            placeholder='johndoe@examplemail.com' />
                                    </Form.Group>
                                    <Form.Group>

                                        <Form.Input
                                            name='businessWork'
                                            value={this.state.business.businessWork}
                                            onChange={this.handleBusinessChange}
                                            fluid
                                            width={4}
                                            label='Work Phone'
                                            placeholder='1234567890' />
                                        <Form.Input
                                            name='businessCell'
                                            value={this.state.business.businessCell}
                                            onChange={this.handleBusinessChange}
                                            width={4}
                                            label='Cell Phone'
                                            placeholder='1234567890' />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Form.Field>
                                            <Button color='blue' floated='left' type='submit' onClick={this.updateBusiness}>Save Business</Button>

                                        </Form.Field>
                                        <Form.Field>
                                            <Popup
                                                trigger={<Button negative floated='left' type='submit' onClick={this.handleOpen}>Delete Business</Button>}
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
                                            name='category'
                                            value={this.state.category}
                                            onChange={this.handleServiceChange}
                                            fluid
                                            width={5}
                                            label='Category'
                                            placeholder='Hair Services' />
                                        {ifCategories}
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
                                            width={12}
                                            label='Service Description'
                                            placeholder='A snippy snappy stylish cut!' />
                                        <Form.Input
                                            name='servicePrice'
                                            value={this.state.servicePrice}
                                            onChange={this.handleServiceChange}
                                            fluid
                                            width={4}
                                            label='Service Price'
                                            placeholder='80' />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>

                                        <Form.Field>
                                            <Button color='blue' floated='left' type='submit' onClick={this.catCheck}>Add Service</Button>
                                        </Form.Field>
                                    </Form.Group>
                                    {ifServices}
                                    {ifSelectedService}
                                </Form>
                            </Grid.Column>
                            <Grid.Column widescreen={8} largeScreen={8} computer={16} tablet={16} mobile={16}>
                                <Form>
                                    {ifEdit}
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
