const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
app.use(express.static(path.join(__dirname, '..', 'built')));
app.use(express.static(path.join(__dirname, '..', 'assets')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, '..', '', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
