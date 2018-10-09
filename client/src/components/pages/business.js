import React from 'react'
//import { Route } from '@okta/okta-react';
import { Grid, Responsive, Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

//Dashboard Layout
import SideNavWide from '../layout/dashboard/content/wideDashboard/sideNavWide';
//import TopNavWide from '../layout/dashboard/content/wideDashboard/topNavWide';
//import WideScreenMenu from "../layout/dashboard/content/dashboardMenus/wideScreenMenu";
//import SmallScreenMenu from '../layout/dashboard/content/dashboardMenus/smallScreenMenu';

//Dashboard Content
import MyBusiness from '../layout/dashboard/content/myBusiness/myBusiness';
import Verify from '../layout/dashboard/content/verifyGift/verify';
import Edit from '../layout/dashboard/content/editBusiness/edit';
import Select from '../layout/dashboard/content/selectBusiness/select';
import Create from '../layout/dashboard/content/createBusiness/create';
import Support from '../layout/dashboard/content/support/support';
import FAQ from '../layout/dashboard/content/faq/faq';

const Dashboard = (props) => {

  return (
    <Responsive>
    <Grid celled padded className='fillPage'>
      <Grid.Row columns={2}>
        <Grid.Column width={3} className='sideNav'>
          <SideNavWide/>
        </Grid.Column>
        <Grid.Column width={13} className='dashboardContent'>
            <Route path="/dashboard" exact={true} render={() => <MyBusiness {...props} logout={props.logout}/>}/>
            <Route path="/dashboard/verify" exact={true} render={() => <Verify {...props} logout={props.logout}/>}/>
            <Route path="/dashboard/edit" exact={true} render={() => <Edit {...props} logout={props.logout}/>}/>
            <Route path="/dashboard/select" exact={true} render={() => <Select {...props} logout={props.logout}/>}/>
            <Route path="/dashboard/create" exact={true} render={() => <Create {...props} logout={props.logout}/>}/>
            <Route path="/dashboard/support" exact={true} render={() => <Support {...props} logout={props.logout}/>}/>
            <Route path="/dashboard/faq" exact={true} render={() => <FAQ {...props} logout={props.logout}/>}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Responsive>
  )
}

export default Dashboard

