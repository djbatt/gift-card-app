import API from '../API';

export const updateDB = async () => {

    const Token = JSON.parse(localStorage.getItem('okta-token-storage'));
    
    const userName = Token.idToken.claims.name;
    const userEmail = Token.idToken.claims.email;
    const userUnique = Token.idToken.claims.sub;
    
    console.log("=============================================")

    const res = await API.findUser(userUnique)
    // if there is no user, save a user to the db, and store id as uId
    // if you have to save a user, then you have no business and set hasBusiness to false
    if (!res.data.length) {

        const saved = await API.saveUser({ name: userName, email: userEmail, oktaUnique: userUnique })
        console.log("You have no user saved, here is your user")
        console.log(saved.data);
        console.log("=============================================");

        adduId(Token, saved.data._id);

    } else {
        console.log("We already have your user saved")
        console.log(res.data);
        console.log("=============================================")

        adduId(Token, res.data[0]._id);
    }
}

export const adduId = (Token, uId) => {
    const parsed = Token;

    parsed["userId"] = uId;

    localStorage.setItem('okta-token-storage', JSON.stringify(parsed));
    
    
    console.log("Token with UID")
    console.log(Token);
    console.log("=============================================")
}

export default updateDB