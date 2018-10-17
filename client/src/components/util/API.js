import axios from "axios";  

export default {

  //Gift API below
  sendEmail: function(emailBody) {
    return axios.post(`/api/gift`, emailBody)
  },

  //Service API below

  addService: function(serviceBody) {
    return axios.post(`/api/service`, serviceBody)
  },

  getService: function(serviceId) {
    console.log(serviceId)
    return axios.get(`/api/service/get/${serviceId}`)
  },

  getServices: function(businessId) {
    return axios.get(`/api/service/${businessId}`)
  },

  //Business API below

  //Save a new business to the db
  saveBusiness: function(businessData) {
    return axios.post(`/api/business`, businessData);
  },

  updateBusiness: function(id, businessData) {
    return axios.post(`/api/business/${id}`, businessData);
  },

  //get the Business data for single business
  getBusiness: function(id) {
    return axios.get(`/api/business/${id}`);
  },

  //get all of a user's business'
  getAllBusiness: function(id) {
    return axios.get(`/api/business/many/${id}`);
  },

  //Delete a business
  deleteBusiness: function(businessID) {
    return axios.delete(`/api/business/${businessID}`);
  },


  //USER API BELOW

  //add a business to the user
  addBusinessToUser: function(id, businessId) {
    return axios.post(`/api/users/addbusiness/${id}`, { businessId });
  },

  //Find a user when the business page loads (by oktaUnique)
  //This only returns the _id and oktaUnique, it is a fast check for exist
  findUser: function(oktaUnique) {
    return axios.get(`/api/users/${oktaUnique}`);
  },

  //Add the user to our db if it doesn't exist
  saveUser: function(userData) {
    return axios.post(`/api/users/`, userData);
  },

  //check if the user has a business
  hasBusiness: function(id) {
    return axios.get(`api/users/ifb/${id}`);
  }
};
