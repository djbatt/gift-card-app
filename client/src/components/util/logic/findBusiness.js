import API from '../API';

export const findBusiness = async id => {
    const res = await API.getBusiness(id)

    console.log(`This is your response`);
    console.log(res.data);
    console.log("=============================================");

    return res.data
}

export default findBusiness