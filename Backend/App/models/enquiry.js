const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Bank Name
  loansDisbursed: { type: Number, required: true },  // Number of loans disbursed
  customerSatisfaction: { type: Number, required: true, min: 0, max: 5 },  // Satisfaction score out of 5
  avgInterestRate: { type: Number, required: true, min: 0, max: 100 },  // Average interest rate in %
  avgProcessingTime: { type: Number, required: true },  // Processing time in days
  createdAt: { type: Date, default: Date.now },  // Timestamp
});

module.exports = mongoose.model("Bank", BankSchema);
