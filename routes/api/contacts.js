var express = require('express');
var router = express.Router();
var Contact = require('../../models/contact')

router.get('/', allContacts)

router.post('/create', createContact)

function allContacts(req, res, next) {
  res.json({msg: 'get all contacts'})
}

function createContact(req, res, next) {
  console.log(req.body)
  res.json({msg: 'post request sent, server route works!'})
}

module.exports = router;
