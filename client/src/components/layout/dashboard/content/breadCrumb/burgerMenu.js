
import { Button, Responsive } from 'semantic-ui-react';
import React from 'react'

export default (props) => {
    return (
        <Responsive maxWidth={992}>
            <Button circular icon='content' color='blue' onClick={props.handler} />
        </Responsive>
    )
}
