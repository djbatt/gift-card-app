import API from '../API';

export const DeleteBusiness = async businessId => {
    const res = await API.deleteBusiness(businessId)

    console.log(`This is your response`);
    console.log(res.data);
    console.log("=============================================");
    return res.data;

}

export default DeleteBusiness