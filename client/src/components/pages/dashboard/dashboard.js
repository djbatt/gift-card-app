import React from 'react';
import { Grid } from 'semantic-ui-react';
import WideNav from '../../layout/dashboard/wideNav/wideNav';
import './dashboard.css';

export default function dashboard() {
  return (
    <Grid className='dashboardContainer' padded>
      <Grid.Column className='navCol' width={2}>
        <WideNav/>
      </Grid.Column>
      <Grid.Column className='contentCol' width={14}>
      </Grid.Column>
    </Grid>
  )
}
