const mongooose = require("mongoose");

const User = mongooose.model("Users", {
  email: {
    type: String,
    trim: true,
    minlength: 1
  },
  age: {
    type: Number,
    required: true
  }
});

module.exports = {
  User
};
