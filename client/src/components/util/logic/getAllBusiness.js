import API from '../API';

export const getAllBusiness = async id => {
    const res = await API.getAllBusiness(id)

    console.log(`This is your response`);
    console.log(res.data);
    console.log("=============================================");

    return res.data;
}

export default getAllBusiness