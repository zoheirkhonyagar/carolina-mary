const mongooose = require("mongoose");

const Todo = mongooose.model("Todo", {
  text: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {
  Todo
};
