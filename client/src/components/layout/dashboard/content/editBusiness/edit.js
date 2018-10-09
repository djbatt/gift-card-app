import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Responsive, Segment, Header, Loader, Button, Divider } from 'semantic-ui-react';
import { getAllBusiness, DeleteBusiness } from '../../../../util/logic';

export default class Edit extends Component {

    state = {
        businessArray: [],
        loading: true
    }

    async componentDidMount() {
        console.log(this.props)
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

    deleteCurrentBusiness = async (businessID) => {
        try {
            console.log(businessID);
            const data = await DeleteBusiness(businessID)
            console.log("Delete business returned:", data);
            this.props.history.push("/business/select")
        } catch (e) {
            console.log(e);
        }
    }


    render() {

        const businessList = this.state.businessArray.map((business) =>
            <Segment key={business._id}>
                <Header>
                    {business.businessName}
                </Header>
                <Button negative onClick={() => { this.deleteCurrentBusiness(business._id) }} floated='right' type='submit'>Delete Business</Button>
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

                <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout}/>
                    <Divider/>
                    <Segment.Group raised>
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
