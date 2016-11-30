var mongoose = require('mongoose');

var Schema = mongoose.Schema

var contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  company: String,
  phone: String,
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
