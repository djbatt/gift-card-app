import React from 'react'
import Months from '../../../../util/JSON/months';

export default function billing() {
    return (
        <Form>
            <Header
                icon='credit card'
                content='Billing Information' />
            <Divider />
            <Form.Group>
                <Form.Input
                    width={10}
                    label='Billing Address'
                    placeholder='Billing Address' />
                <Form.Input
                    width={3}
                    label='Appartment #'
                    placeholder='Appartment #' />
                <Form.Field width={2}>
                    <label>State</label>
                    <Dropdown
                        fluid
                        onChange={this.handleChange}
                        closeOnChange
                        selection
                        name="billingState"
                        options={States}
                        placeholder='State' />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Input
                    width={6}
                    label='Name On Card'
                    placeholder='Name On Card' />
                <Form.Input
                    width={4}
                    label='Card #'
                    placeholder='Card #' />
                <Form.Input
                    width={2}
                    label='CVC'
                    placeholder='CVC' />
                <Form.Field width={2}>
                    <label>Month</label>
                    <Dropdown
                        fluid
                        onChange={this.handleChange}
                        closeOnChange
                        selection
                        name="billingMonth"
                        options={Months}
                        placeholder='Month' />
                </Form.Field>
                <Form.Input
                    width={2}
                    label={'Year'}
                    maxLength="4"
                    placeholder='Year' />
            </Form.Group>
        </Form>
    )
}
