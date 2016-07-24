var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors());

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
// var authCheck = jwt({
//   secret: new Buffer('YOUR_AUTH0_SECRET', 'base64'),
//   audience: 'YOUR_AUTH0_CLIENT_ID'
// });

var users = [
  { id: 1, name: 'Todd Motto', image: 'image-1.jpg' },
  { id: 2, name: 'Brad Green', image: 'image-2.jpg' },
  { id: 3, name: 'Igor Minar', image: 'image-3.jpg' }
];

app.get('/api/users', /*authCheck,*/ function(req, res) {
  res.json(users);
});

app.listen(3001);
console.log('Listening on http://localhost:3001');