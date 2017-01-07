
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const publish = require('./api/publish');
const posts = require('./api/posts');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/create', publish);
app.use('/posts', posts);

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/reddit' );
const db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});



app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
