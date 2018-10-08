import React from 'react'
//import { Route } from '@okta/okta-react';
import { Grid, Responsive } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

//Dashboard Layout
import WideScreenMenu from "../layout/dashboard/content/dashboardMenus/wideScreenMenu";
import SmallScreenMenu from '../layout/dashboard/content/dashboardMenus/smallScreenMenu';

//Dashboard Content
import Details from '../layout/dashboard/content/businessDetails/details';
import Verify from '../layout/dashboard/content/verifyGift/verify';
import EditGift from '../layout/dashboard/content/editGiftPage/edit';
import Support from '../layout/dashboard/content/support/support';
import FAQ from '../layout/dashboard/content/faq/faq';
import Select from '../layout/dashboard/content/selectBusiness/select';
import Create from '../layout/dashboard/content/createBusiness/create';
import EditBusiness from '../layout/dashboard/content/editBusiness/edit';
import Delete from '../layout/dashboard/content/deleteBusiness/delete';

const Dashboard = () => {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
          <WideScreenMenu />
        </Grid.Column>
        <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
          <Responsive maxWidth={1200}>
          <SmallScreenMenu/>
          </Responsive>
          <Responsive minWidth={1200}>
            <Route path="/business" exact={true} component={Details} />
            <Route path="/business/verify" exact={true} component={Verify} />
            <Route path="/business/gifts" exact={true} component={EditGift} />
            <Route path="/business/support" exact={true} component={Support} />
            <Route path="/business/faq" exact={true} component={FAQ} />
            <Route path="/business/edit" exact={true} component={EditBusiness} />
            <Route path="/business/select" exact={true} component={Select} />
            <Route path="/business/create" exact={true} component={Create} />
            <Route path="/business/delete" exact={true} component={Delete} />
          </Responsive>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Dashboard

