import React, { Component } from 'react'
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/businessContent/smallScreenSideNav';
import WideScreenMenu from "../layout/businessContent/wideSideMenu";
import Example from '../content/example';

export default class businessDashboard extends Component {
    state = {
        currentToken: null
    }

    componentDidMount() {
        const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

        console.log(oktaToken);
        
        this.setState({
            currentToken: oktaToken
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
