import React, { Component } from 'react'
import { Grid, Responsive } from 'semantic-ui-react';
import { SecureRoute } from '@okta/okta-react';
import API from '../util/API';

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

// const Dashboard = (props) => {
//   return (
//     <Responsive>
//       <Grid celled padded className='fillPage'>
//         <Grid.Row columns={2}>
//           <Grid.Column as={Responsive} widescreen={2} largeScreen={2} computer={3} minWidth={992} className='sideNav'>
//             <SideNavWide />
//           </Grid.Column>
//           <Grid.Column widescreen={14} largeScreen={14} computer={13} tablet={16} mobile={16} className='dashboardContent'>
//             <Responsive>
//               <SecureRoute path="/dashboard" exact={true} render={() => <SideNavNarrow><MyBusiness {...props} logout={props.logout} /></SideNavNarrow>} />
//               <SecureRoute path="/dashboard/edit" exact={true} render={() => <SideNavNarrow><Edit {...props} logout={props.logout} /></SideNavNarrow>} />
//               <SecureRoute path="/dashboard/select" exact={true} render={() => <SideNavNarrow><Select {...props} logout={props.logout} /></SideNavNarrow>} />
//               <SecureRoute path="/dashboard/create" exact={true} render={() => <SideNavNarrow><Create {...props} logout={props.logout} /></SideNavNarrow>} />
//               <SecureRoute path="/dashboard/support" exact={true} render={() => <SideNavNarrow><Support {...props} logout={props.logout} /></SideNavNarrow>} />
//               <SecureRoute path="/dashboard/faq" exact={true} render={() => <SideNavNarrow><FAQ {...props} logout={props.logout} /></SideNavNarrow>} />
//             </Responsive>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Responsive>
//   )
// }

// export default Dashboard


export default class Dashboard extends Component {
  componentDidMount() {
    this.checkUser();
  }

  checkUser = async () => {

    const Token = JSON.parse(localStorage.getItem('okta-token-storage'));
    
    const userName = Token.idToken.claims.name;
    const userEmail = Token.idToken.claims.email;
    const userUnique = Token.idToken.claims.sub;

    try {
        const res = await API.findUser(userUnique) //Check if there is a user in the db, matching the oktaUnique

        if (!res.data.length) {

            //If not, save the user to the db

            const saved = await API.saveUser({ name: userName, email: userEmail, oktaUnique: userUnique })

            // console.log("You have no user saved, here is your user")
            // console.log(saved.data);
            // console.log("=============================================");

            this.adduId(Token, saved.data._id); // Add uid to localstorage

        } else {
            // console.log("We already have your user saved")
            // console.log(res.data);
            // console.log("=============================================")

            this.adduId(Token, res.data[0]._id); // Add uid to localstorage
        }

        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

adduId = async (Token, uId) => {

  const parsed = Token;

  parsed["userId"] = uId;

  localStorage.setItem('okta-token-storage', JSON.stringify(parsed));

  this.forceUpdate();
}

  render() {
    const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

    if (!Token.hasOwnProperty('userId')) {
      console.log('no property')
    } else {
      console.log('has property')
    }

    const hasId = !Token.hasOwnProperty('userId') ? (
      <div/>
    ) : (
      <Grid celled padded className='fillPage'>
        <Grid.Row columns={2}>
          <Grid.Column as={Responsive} widescreen={2} largeScreen={2} computer={3} minWidth={992} className='sideNav'>
            <SideNavWide />
          </Grid.Column>
          <Grid.Column widescreen={14} largeScreen={14} computer={13} tablet={16} mobile={16} className='dashboardContent'>
            <Responsive>
              <SecureRoute path="/dashboard" exact={true} render={() => <SideNavNarrow><MyBusiness {...this.props} logout={this.props.logout} /></SideNavNarrow>} />
              <SecureRoute path="/dashboard/edit" exact={true} render={() => <SideNavNarrow><Edit {...this.props} logout={this.props.logout} /></SideNavNarrow>} />
              <SecureRoute path="/dashboard/select" exact={true} render={() => <SideNavNarrow><Select {...this.props} logout={this.props.logout} /></SideNavNarrow>} />
              <SecureRoute path="/dashboard/create" exact={true} render={() => <SideNavNarrow><Create {...this.props} logout={this.props.logout} /></SideNavNarrow>} />
              <SecureRoute path="/dashboard/support" exact={true} render={() => <SideNavNarrow><Support {...this.props} logout={this.props.logout} /></SideNavNarrow>} />
              <SecureRoute path="/dashboard/faq" exact={true} render={() => <SideNavNarrow><FAQ {...this.props} logout={this.props.logout} /></SideNavNarrow>} />
            </Responsive>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
    return (
      <Responsive>
        {hasId}
      </Responsive>
    )
  }
}


