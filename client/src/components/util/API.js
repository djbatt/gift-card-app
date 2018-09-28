import axios from "axios";  

export default {

  //Save a new business to the db
  saveBusiness: function(businessData) {
    return axios.post(`/api/business`, businessData);
  },

  //add a business to the user
  addBusinessToUser: function(id, businessId) {
    return axios.post(`/api/users/addbusiness/${id}`, { businessId });
  },

  //Find a user when the business page loads (by oktaUnique) this is checking if the user exists
  findUser: function(oktaUnique) {
    return axios.get(`/api/users/${oktaUnique}`);
  },

  //Add the user to our db if it doesn't exist
  saveUser: function(userData) {
    return axios.post(`/api/users/`, userData);
  },

  //Check if the 
  ifBusinessExists: function(id) {
    return axios.get(`/api/business/${id}`)
  }

  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
