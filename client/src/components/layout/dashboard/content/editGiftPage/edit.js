import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Segment } from 'semantic-ui-react';

export default class EditGift extends Component {

    handleCheckBox = e => {
        console.log("handle")
    }

    handleFormSubmit = async event => {
        console.log("submit")
    }

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            //console.log(this.state)
        })
    }

    handleRadioChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Segment.Group className='shadow'>
                <BreadCrumb pathName={this.props.match.path} clickHandler={this.props.handleClick} />
                <Segment>
                    
                </Segment>
            </Segment.Group>
        )
    }
}
