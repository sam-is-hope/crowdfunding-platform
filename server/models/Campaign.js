const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deadline: Date,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
