// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");

// internal import - time
const formatDate = require("../../utils/date");
const reactions = require("./Reaction");

// define your schema oject  and define your required fields
const thoughtSchema = {
  text: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [reactions],
};

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(thoughtSchema);

// virtual to get the length of the thought's reactions
schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// create the Thought model using mongoose class schema
const Thought = model("Thought", schema);

// export the model
module.exports = Thought;
