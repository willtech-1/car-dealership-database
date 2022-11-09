// Requiring Mongoose.
const mongoose = require("mongoose");

// car database schemas
const carSchema = mongoose.Schema({
  model: {
    type: Number,
  },
  make: {
    type: String,
  },
  owner: {
    type: String,
  },
  regNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  prevOwners: {
    type: Array,
  },
});

module.exports = mongoose.model("Cars", carSchema);