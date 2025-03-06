const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  loanAmount: { type: Number, required: true },
  termYears: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  emiAmount: { type: Number, required: true },
  disbursementSchedule: [{ date: Date, amount: Number }],
  repaymentSchedule: [{ year: Number, principal: Number, interest: Number }],
});

module.exports = mongoose.model("Loan", LoanSchema);
