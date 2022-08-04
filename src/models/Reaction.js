// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");

// import sub documents for schema
const formatDate = require("../../utils/date");

// define your schema oject  and define your required fields
const reactionSchema = {
  id: {
    id: Schema.Types.ObjectId,
  },
  body: {
    type: String,
    required: true,
    maxLength: 280,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
  },
};

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(reactionSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

// export the model
module.exports = schema;
