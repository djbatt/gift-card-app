import React from 'react'
import { Grid, Responsive } from 'semantic-ui-react';
import SmallScreenMenu from '../vertMenu/slideMenu';
import WideScreenMenu from "../vertMenu/wideSideMenu";
import Example from '../content/example';

export default (props) => {
    return (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
                    <WideScreenMenu/>
                </Grid.Column>
                <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
                    <SmallScreenMenu>
                        <Example/>
                    </SmallScreenMenu>
                    <Responsive minWidth={1200}>
                        <Example/>
                    </Responsive>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
