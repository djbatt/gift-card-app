==========================================================

This app is based off React on the front end, and uses MongoDB as a database

==========================================================

App use case structure:

Home (Not Logged in) can access home, and contact, and login

Once logged we also store your user in the db, which relates to a business or (many business') (Must create business and pay registration fee before next step)

Once you create your business, we give you access to your dashboard (Which is where you can create a gift card page and manage it)

Most features require a business and then a page to be used

==========================================================

Mongo Structure

User > Business > Cards/Sources/Recipients

Recipients/Sources > Cards > Business

Cards > Sources/Clients > Business

Payment ID if we can get it

==========================================================

Contact info needed from purchaser {Email, Name, Phone Number}
// We put these in our database of clients, which relates to their gifts/purchases so they cannot be lost

Info needed for our database, Recipients first (and or last name), these are not required
// If provided we store them with the gift in our database

eGift Delivery options {email, print, email and print} chosen by business
// The business chooses which of the three or all are on the page, and then the client chooses which one they want, if email is chosen open a modal/form and add email input, and a date to email it

Gift Types {Dollar Amount, and Services}
// Owner chooses which of the two are on the page or both if service display services and allow multiple services to be displayed, also add an option for show service price

Owner can choose if they want their own image as a gift card background, or they can choose if they want the clients to select from an array of background options
The array of choices also has an option to choose what type of occasion its for, the owner chosen is always the first though, no matter what occasion choice
Client chooses what background they want in the array case
//Owner can combine the two and put their image within the array of options

To and From which is optional on the client side
and a message to leave for the recipient

Finally add payment

User signs in, they go to a business choosing component, it checks if the user has any business(s), if they have only one display the dashboard for it, if they have multiple create a selection for each business, if they have none bring them to create a business