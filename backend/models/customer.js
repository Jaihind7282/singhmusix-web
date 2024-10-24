const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  songName: String,
  recordingDate: String,
  notes: String,
});

module.exports = mongoose.model("Customer", customerSchema);
