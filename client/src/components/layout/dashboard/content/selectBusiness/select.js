import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Responsive, Segment, Header, Loader, Button, Breadcrumb } from 'semantic-ui-react';
import { getAllBusiness } from '../../../../util/logic';

export default class Select extends Component {
    
    state = {
        businessArray: [],
        loading: true
    }

    async componentDidMount() {
        console.log("did mount")
        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        if (!Token.hasOwnProperty("userId")) {
            console.log("You have no token yet");
        } else {
            try {
                const data = await getAllBusiness(Token.userId)

                console.log("getAllBusiness returned:", data);

                this.setState({
                    businessArray: data,
                    loading: false
                })
            } catch (e) {
                console.log(e);
            }
        }
    }

    addCurrentBusiness = (businessID) => {
        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        const parsed = Token;
    
        parsed["currentBusiness"] = businessID;
    
        localStorage.setItem('okta-token-storage', JSON.stringify(parsed));
        
        
        console.log("Token with businessID")
        console.log(Token);
        console.log("=============================================")

        
        this.props.history.push("/business")
    }
    

    render() {

        const businessList = this.state.businessArray.map((business) =>
            <Segment key={business._id}>
                <Header>
                    {business.businessName}
                </Header>
                <Button positive floated='right' type='submit' onClick={() => {this.addCurrentBusiness(business._id)}}>Select Business</Button>
                <span>Street Address: {business.streetAddress}</span>
                <br></br>
                <span>Email: {business.eMail}</span>
                <br></br>
                <span>Business Phone: {business.businessPhone}</span>
                <br></br>
                <span>Cell Phone: {business.cellPhone}</span>
            </Segment>);

        const ifLoading = this.state.loading ? (
            <Responsive>
                <Loader size='massive' active inline='centered'>Loading Content</Loader>
            </Responsive>
        ) : (
                <Responsive>
                    <Segment.Group className='shadow'>
                        <Segment tertiary>
                            <Breadcrumb size='big'>
                                <Link to='/'>
                                    <Breadcrumb.Section>Home</Breadcrumb.Section>
                                </Link>
                                <Breadcrumb.Divider icon='right chevron' />
                                <Link to='/business'>
                                    <Breadcrumb.Section>My Business</Breadcrumb.Section>
                                </Link>
                                <Breadcrumb.Divider icon='right chevron' />
                                <Breadcrumb.Section active>Select A Business</Breadcrumb.Section>
                            </Breadcrumb>
                        </Segment>
                        {businessList}
                    </Segment.Group>
                </Responsive>
            );

        return (
            <div>
                {ifLoading}
            </div>
        )
    }
}
