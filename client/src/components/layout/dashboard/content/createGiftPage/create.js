import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Segment } from 'semantic-ui-react';

export default class createGift extends Component {

    render() {
        return (
            <Segment.Group className='shadow'>
                <BreadCrumb pathName={this.props.match.path} clickHandler={this.props.handleClick}/>
                <Segment>
                    <span>Put business info here!</span>
                </Segment>
            </Segment.Group>
        )
    }
}
