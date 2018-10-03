import React from 'react'
import { SecureRoute } from '@okta/okta-react';
import { Grid, Responsive } from 'semantic-ui-react';

//Dashboard Layout
import WideScreenMenu from "../layout/dashboard/content/dashboardMenus/wideScreenMenu";

//Dashboard Content
import Details from '../layout/dashboard/content/businessDetails/details';
import Select from '../layout/dashboard/content/selectBusiness/select';
import Create from '../layout/dashboard/content/createBusiness/create';
import EditBusiness from '../layout/dashboard/content/editBusiness/edit';
import Delete from '../layout/dashboard/content/deleteBusiness/delete';
//Example lipsum
import Lipsum from '../layout/dashboard/content/lipsum';

const Dashboard = () => {

  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
          <WideScreenMenu />
        </Grid.Column>
        <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
          <Responsive maxWidth={1200}>
            <SecureRoute path="/business" exact={true} component={Details} />
            <SecureRoute path="/business/verify" exact={true} component={Lipsum} />
            <SecureRoute path="/business/gifts" exact={true} component={Lipsum} />
            <SecureRoute path="/business/support" exact={true} component={Lipsum} />
            <SecureRoute path="/business/faq" exact={true} component={Lipsum} />
            <SecureRoute path="/business/edit" exact={true} component={EditBusiness} />
            <SecureRoute path="/business/select" exact={true} component={Select} />
            <SecureRoute path="/business/create" exact={true} component={Create} />
            <SecureRoute path="/business/delete" exact={true} component={Delete} />
          </Responsive>
          <Responsive minWidth={1200}>
            <SecureRoute path="/business" exact={true} component={Details} />
            <SecureRoute path="/business/verify" exact={true} component={Lipsum} />
            <SecureRoute path="/business/gifts" exact={true} component={Lipsum} />
            <SecureRoute path="/business/support" exact={true} component={Lipsum} />
            <SecureRoute path="/business/faq" exact={true} component={Lipsum} />
            <SecureRoute path="/business/edit" exact={true} component={EditBusiness} />
            <SecureRoute path="/business/select" exact={true} component={Select} />
            <SecureRoute path="/business/create" exact={true} component={Create} />
            <SecureRoute path="/business/delete" exact={true} component={Delete} />
          </Responsive>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Dashboard

