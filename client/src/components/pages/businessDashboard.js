import React, { Component } from 'react'
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/businessContent/smallScreenSideNav';
import WideScreenMenu from "../layout/businessContent/wideSideMenu";
import Example from '../content/example';
import API from '../util/API';

export default class businessDashboard extends Component {

    componentDidMount() {

        const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

        const userName = oktaToken.idToken.claims.name;
        const userEmail = oktaToken.idToken.claims.email;
        const userUnique = oktaToken.idToken.claims.sub;
        
        //console.log(oktaToken);
        
        // Check if user exists on componentMount, if not saveUser to db
        API.findUser(userUnique).then((res) => {
            if (!res.data.length) {
                API.saveUser({name: userName, email: userEmail, oktaUnique: userUnique});
            } else {
                //console.log(res);
            }
        })
    }

    render() {
        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
                        <WideScreenMenu />
                    </Grid.Column>
                    <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
                        <SmallScreenMenu>
                            <Example />
                            <Example />
                            <Example />
                        </SmallScreenMenu>
                        <Responsive minWidth={1200}>
                            <Segment color='teal'>
                                <Example />
                                <Example />
                                <Example />
                            </Segment>
                        </Responsive>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
