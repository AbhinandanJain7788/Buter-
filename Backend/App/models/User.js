const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pan: { type: String, required: true },
  aadhaar: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
