import React, { Component } from 'react'
import { Responsive, Segment } from 'semantic-ui-react';
import { hasBusiness, chosenBusiness } from '../../../util/logic';

export default class Select extends Component {
    state = {
        businessArray: []
    }

    async componentDidMount() {
        console.log("did mount")
        const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

        if (!Token.hasOwnProperty("userId")) {
            console.log("You have no token yet");
        } else {
            try {
                const data = await hasBusiness(Token.userId)
                console.log("hasBusiness returned:", data);

                this.setState({
                    businessArray: data
                })
            } catch (e) {
                console.log(e);
            }
        }
    }

    render() {
        return (
            <Responsive>
                <Segment.Group>
                    <Segment>

                    </Segment>
                </Segment.Group>
            </Responsive>
        )
    }
}
