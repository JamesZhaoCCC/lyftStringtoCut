
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../lyftfront/build')));

// routes will go here

// Lyft post request
app.post('/test', function(req, res) {
    const string = req.body.string_to_cut;
    let return_string = "";
    for(let i = 0; i < string.length; i++) {
        if(i%3 == 2) return_string += string[i]; //2,5,8,11...
    }

    res.json([{
      'return_string': return_string
    }]);
  });


app.listen(port);
console.log('Server listening on:' + port);