// Create web server
// Create a new web server using the express module.
var express = require('express');
var app = express();
// Create a new web server using the express module.
var app = express();
// Define a route
app.get('/', function (req, res) {
  res.send('Hello, World!');
});
// Start the server
app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});
// Run the server
// Run the server by using the following command:
// node comments.js
// Open a browser and navigate to http://localhost:3000. You should see the message "Hello, World!" displayed on the page.