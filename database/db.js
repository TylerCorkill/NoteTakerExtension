var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000 }},
                replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS : 30000 }}};

// var MONGODB_URI = 'mongodb://localhost:27017/NoteExtension';
mongoose.connect(process.env.MONGODB_URI, options);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected to database');
});

module.exports = db;