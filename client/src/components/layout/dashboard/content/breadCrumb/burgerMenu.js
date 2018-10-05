
import { Button, Responsive } from 'semantic-ui-react';
import React from 'react'

export default (props) => {
    return (
        <Responsive maxWidth={1200}>
            <Button circular icon='content' color='blue' className='menuButton' onClick={props.handler} />
        </Responsive>
    )
}
