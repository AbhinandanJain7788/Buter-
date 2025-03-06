const mongoose = require("mongoose");

// Define the schema for Bank data
const BankSchema = new mongoose.Schema({
  name: { type: String }, // Name of the bank (e.g., HDFC, SBI)
  loansDisbursed: { type: Number } // Number of loans disbursed
//   customerSatisfaction: { type: Number, required: true, min: 0, max: 5 }, // Satisfaction rating out of 5
//   avgInterestRate: { type: Number, required: true, min: 0, max: 100 }, // Average interest rate (percentage)
//   avgProcessingTime: { type: Number, required: true }, // Loan processing time (in days)
//   createdAt: { type: Date, default: Date.now }, // Timestamp for when the entry was created
});

// Export the model to use it in other parts of the app
module.exports = mongoose.model("Bank", BankSchema);
