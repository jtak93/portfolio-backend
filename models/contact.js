var mongoose = require('mongoose');
var contactSchema = mongoose.model('Contact').schema

var Schema = mongoose.Schema

var contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  company: String,
  phone: String,
});
