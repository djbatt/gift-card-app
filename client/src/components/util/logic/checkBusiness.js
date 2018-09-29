import API from '../API';

var businessData = {
    businessArray: [],
    hasBusiness: null
}

export const hasBusiness = async uId => {
    const res = await API.hasBusiness(uId)

    console.log(`This is your response`);
    console.log(res.data[0]);
    console.log("=============================================");

    if (!res.data[0].business.length) {
        businessData.hasBusiness = false;
        return businessData;
    } else {
        businessData.hasBusiness = true;
        businessData.businessArray.push(res.data[0].business[0])
        return businessData;
    }
}

export default hasBusiness