const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');

const app = express();
app.use(bodyParser.json());

// define routes

app.post('/users', (req, res) => {
  let newUser = new User({
    email: req.body.email,
    age: req.body.age
  });

  newUser.save().then(
    doc => {
      res.send(doc);
    },
    error => {
      res.send(error);
    }
  );
});

app.listen(3000, () => {
  console.log('Listen in port 3000');
});

module.exports = {
  app
};
