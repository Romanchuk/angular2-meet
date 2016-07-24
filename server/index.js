var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./routes/auth'));

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
// var authCheck = jwt({
//   secret: new Buffer('YOUR_AUTH0_SECRET', 'base64'),
//   audience: 'YOUR_AUTH0_CLIENT_ID'
// });



app.listen(3001);
console.log('Listening on http://localhost:3001');
