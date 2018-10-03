import axios from "axios";  

export default {

  //Save a new business to the db
  saveBusiness: function(businessData) {
    return axios.post(`/api/business`, businessData);
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

  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // }
};
