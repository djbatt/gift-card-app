import React from 'react'
import { SecureRoute } from '@okta/okta-react';
import { Grid, Responsive, Segment } from 'semantic-ui-react';
import SmallScreenMenu from '../layout/dashboard/smallScreenSideNav';
import WideScreenMenu from "../layout/dashboard/wideScreenMenu";
import Select from '../layout/dashboard/selectBusiness/select';
import Details from '../layout/dashboard/businessDetails/details';
import Delete from '../layout/dashboard/deleteBusiness/delete';
import EditBusiness from '../layout/dashboard/editBusiness/edit';
import Lipsum from '../util/lipsum';

const Business = () => {

  return (
    <Grid>
          <Grid.Row columns={2}>
            <Grid.Column as={Responsive} widescreen={3} largeScreen={3} minWidth={1200}>
              <WideScreenMenu />
            </Grid.Column>
            <Grid.Column as={Responsive} widescreen={13} largeScreen={13} computer={16} tablet={16} mobile={16}>
              <SmallScreenMenu>
                  <SecureRoute path="/business" exact={true} component={Details} />
                  <SecureRoute path="/business/verify" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/gifts" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/support" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/faq" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/edit" exact={true} component={EditBusiness}/>
                  <SecureRoute path="/business/select" exact={true} component={Select}/>
                  <SecureRoute path="/business/delete" exact={true} component={Delete}/>
              </SmallScreenMenu>
              <Responsive minWidth={1200}>
                  <SecureRoute path="/business" exact={true} component={Details} />
                  <SecureRoute path="/business/verify" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/gifts" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/support" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/faq" exact={true} component={Lipsum} />
                  <SecureRoute path="/business/edit" exact={true} component={EditBusiness}/>
                  <SecureRoute path="/business/select" exact={true} component={Select}/>
                  <SecureRoute path="/business/delete" exact={true} component={Delete}/>
              </Responsive>
            </Grid.Column>
          </Grid.Row>
        </Grid>
  )
}

export default Business

