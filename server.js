var unsplash = require('unsplash-api');
var express  = require('express');
var bodyParser=require('body-parser');
var app      = express();

unsplash.init("3e4a3e3d3e0f025663743b1570da3407ca202e089027895f54b7585993d6933b");



app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.get('/api/pics', function(req,res) {
  unsplash.getPhotos(null, null, function(error, photos, link) {
     //Access default 10 photos from first page of results here
     res.send(photos);
     console.log(photos);
  });
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  // load the single view file (angular will handle the page changes on the front-end)
});

// ============listen (start app with node server.js) =================================
app.listen(8080);
console.log("App listening on port 8080");
