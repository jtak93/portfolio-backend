var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds059135.mlab.com:59135/portfolio-backend');
mongoose.Promise = global.Promise;

// shortcut to mongoose.connection object
var db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});
