import React from 'react'
import { Grid, Responsive } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

//Dashboard Layout
import SideNavWide from '../layout/dashboard/content/wideDashboard/sideNavWide';
import SideNavNarrow from '../layout/dashboard/content/mobileDashboard/sideNavNarrow';

//Dashboard Content
import MyBusiness from '../layout/dashboard/content/myBusiness/myBusiness';
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
          <Grid.Column as={Responsive} widescreen={2} largeScreen={2} computer={3} minWidth={992} className='sideNav'>
            <SideNavWide />
          </Grid.Column>
          <Grid.Column widescreen={14} largeScreen={14} computer={13} tablet={16} mobile={16} className='dashboardContent'>
            <Responsive>
              <Route path="/dashboard" exact={true} render={() => <SideNavNarrow><MyBusiness {...props} logout={props.logout} /></SideNavNarrow>} />
              <Route path="/dashboard/edit" exact={true} render={() => <SideNavNarrow><Edit {...props} logout={props.logout} /></SideNavNarrow>} />
              <Route path="/dashboard/select" exact={true} render={() => <SideNavNarrow><Select {...props} logout={props.logout} /></SideNavNarrow>} />
              <Route path="/dashboard/create" exact={true} render={() => <SideNavNarrow><Create {...props} logout={props.logout} /></SideNavNarrow>} />
              <Route path="/dashboard/support" exact={true} render={() => <SideNavNarrow><Support {...props} logout={props.logout} /></SideNavNarrow>} />
              <Route path="/dashboard/faq" exact={true} render={() => <SideNavNarrow><FAQ {...props} logout={props.logout} /></SideNavNarrow>} />
            </Responsive>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Responsive>
  )
}

export default Dashboard

