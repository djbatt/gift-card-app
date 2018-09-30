import API from '../API';

export const grabMany = async id => {
    const res = await API.grabMany(id)

    console.log(`This is your response`);
    console.log(res.data);
    console.log("=============================================");

    return res.data;
}

export default grabMany