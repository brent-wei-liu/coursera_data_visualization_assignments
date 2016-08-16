// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');

var app = express();
app.use(express.static('public'));
app.get('/dv', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
app.get('/assignment_1', function (req, res) {
   res.sendFile( __dirname + "/" + "assignment_1.htm" );
})

// [START hello_world]
// Say hello!
app.get('/', function (req, res) {
  res.status(200).send('Hello, world1!');
});

app.get('/d3.v3.min.js', function (req, res) {
    var fs = require("fs");
    // Synchronous read
    var data = fs.readFileSync('d3.v3.min.js');
    res.status(200).send(data);
});
app.get('/c3js/c3.css', function (req, res) {
    var fs = require("fs");
    // Synchronous read
    var data = fs.readFileSync('c3js/c3.css');
    res.setHeader('content-type', 'text/css');
    res.status(200).send(data.toString());
});

app.get('/c3js/c3.min.js', function (req, res) {
    var fs = require("fs");
    // Synchronous read
    var data = fs.readFileSync('c3js/c3.min.js');
    res.status(200).send(data);
});


app.get('/data.tsv', function (req, res) {
    var fs = require("fs");
    // Synchronous read
    var data = fs.readFileSync('data.tsv');

  //res.status(200).send(data);
  res.status(200).send("date\tclose\n24-Apr-07\t93.24\n");
});

app.get('/data.csv', function (req, res) {
    var fs = require("fs");
    // Synchronous read
    var data = fs.readFileSync('data.csv');
    res.status(200).send(data);
});
app.get('/ZonAnn.csv', function (req, res) {
    var fs = require("fs");
    // Synchronous read
    var data = fs.readFileSync('ZonAnn.csv');
    res.status(200).send(data);
});


// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;
