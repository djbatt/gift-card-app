import React, { Component } from 'react'
import BreadCrumb from '../breadCrumb/breadcrumb';
import { Responsive, Divider } from 'semantic-ui-react';

export default class Verify extends Component {

    render() {
        return (
            <Responsive>

            <BreadCrumb pathName={this.props.location.pathname} logout={this.props.logout}/>
                <Divider />

            </Responsive>
        )
    }
}
