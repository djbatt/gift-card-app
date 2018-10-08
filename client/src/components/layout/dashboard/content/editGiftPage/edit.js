import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Segment, Header, Form, Input, Button, Icon, Label } from 'semantic-ui-react';

export default class EditGift extends Component {

    state = {
        categoryForm: ''
    }
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
                    <Header>Add a category or service!</Header>
                    <Form>
                        <Form.Group>
                            <Form.Field inline>
                            <label>Category</label>
                                <Input
                                name='categoryForm'
                                value={this.state.categoryForm}
                                onChange={this.handleFormChange}
                                placeholder='Hair Services' />
                            </Form.Field>
                                <Form.Field
                                width={3}>
                                    
                                <Button positive onClick={this.handleFormSubmit} type='submit'>
                                    <Icon name='cloud' />
                                    Submit</Button>
                                </Form.Field>
                        </Form.Group>
                    </Form>
                </Segment>
            </Segment.Group>
        )
    }
}
