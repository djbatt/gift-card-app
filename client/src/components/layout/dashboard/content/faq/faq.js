import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Responsive, Divider } from 'semantic-ui-react';

export default class FAQ extends Component {

    render() {
        return (
            <Responsive className='fillPage'>


          <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout} handler={this.props.handler}/>
            <Divider />
            </Responsive>
        )
    }
}
