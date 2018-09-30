import API from '../API';

export const updateDB = async Token => {
    
    const userName = Token.idToken.claims.name;
    const userEmail = Token.idToken.claims.email;
    const userUnique = Token.idToken.claims.sub;
    console.log(Token);
    console.log("=============================================")

    const res = await API.findUser(userUnique)
    // if there is no user, save a user to the db, and store id as uId
    // if you have to save a user, then you have no business and set hasBusiness to false
    if (!res.data.length) {
        console.log("Empty Array")
        console.log(res.data);
        console.log("=============================================");

        const saved = await API.saveUser({ name: userName, email: userEmail, oktaUnique: userUnique })
        console.log("Your user data")
        console.log(saved.data);
        console.log("=============================================");

        return saved.data;

    } else {
        console.log("We already have your user saved")
        console.log(res.data);
        console.log("=============================================")
        console.log(Token);
        adduId(Token, res.data[0]._id);
        return res.data[0];
    }
}

export const isEmpty = obj => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const ifToken = () => {

    const oktaToken = JSON.parse(localStorage.getItem('okta-token-storage'));

    if (isEmpty(oktaToken)) {
        console.log("You have no token!")
        return { exception: "You have no token" }
    } else {
        console.log("You have a token!")
        return updateDB(oktaToken);
        
    }
}

export const adduId = (Token, uId) => {
    var parsed = Token;

    parsed["userId"] = uId;

    localStorage.setItem('okta-token-storage', JSON.stringify(parsed));

    console.log(Token);
}

export default ifToken