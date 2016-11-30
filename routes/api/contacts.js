var express = require('express');
var router = express.Router();
var Contact = require('../../models/contact')

router.post('/contacts/create', createContact)

function createContact() {
  console.log(req.body)
}
