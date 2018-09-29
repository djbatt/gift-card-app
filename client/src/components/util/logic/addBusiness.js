import API from '../API';

export const addBusiness = async businessInfo => {
    const res = await API.saveBusiness(businessInfo)

    console.log(`This is your response`);
    console.log(res.data);
    console.log("=============================================");

    await API.addBusinessToUser(res.data.user, res.data._id)
    
    return res.data;

}

export default addBusiness