import API from '../API';

const Token = JSON.parse(localStorage.getItem('okta-token-storage'));

export const chosenBusiness = id => {
    const parsed = Token;

    parsed["chosenBusinessId"] = id;

    localStorage.setItem('okta-token-storage', JSON.stringify(parsed));

    return findBusiness(Token.chosenBusinessId);
}

export const findBusiness = async id => {
    const res = await API.getBusiness(id)

    console.log(`This is your response`);
    console.log(res.data);
    console.log("=============================================");

    return res.data
}

export default chosenBusiness