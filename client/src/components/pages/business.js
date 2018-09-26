import React, { Component } from 'react'
import Dashboard from '../content/dashboard'
import API from '../util/API';

export default class Business extends Component {

    componentDidMount() {

        const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

        const userName = oktaToken.idToken.claims.name;
        const userEmail = oktaToken.idToken.claims.email;
        const userUnique = oktaToken.idToken.claims.sub;
        
        //console.log(oktaToken);
        
        // Check if user exists on componentMount, if not saveUser to db
        API.findUser(userUnique).then((res) => {
            if (!res.data.length) {
                API.saveUser({name: userName, email: userEmail, oktaUnique: userUnique});
            } else {
                //console.log(res);
            }
        })
    }

    render() {
        return (
            <Dashboard>
                
            </Dashboard>
        )
    }
}
