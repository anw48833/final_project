process.env.NODE_ENV = 'development';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const items = require('./routes/api/items');
const users = require('./routes/api/users');

// create a new instance of Express application
const app = express();

// add middleware to parse incoming requests
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

// define the API routes for your application
const router = express.Router();

app.use('/api', router);
app.use('/api/items', items);
app.use('/api/users', users);

// other routes will be defined here

// connect to MongoDB database using Mongoose
const conn_str = 'mongodb+srv://anw48833:godawgs123@cluster0.vifnths.mongodb.net/?retryWrites=true&w=majority';

console.log(__dirname);

// serve static assets in production
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/**
// add the route handler for /sign-up
app.get('/sign-up', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// add the route handler for /log-in
app.get('/log-in', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 */

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});