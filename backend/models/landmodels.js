const mongoose = require('mongoose');

const landSchema = new mongoose.Schema({
  surveyNumber: String,
  subdivisionNumber: String,
  talukNumber: String,
  state: String,
  landId: String,
  landName: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Land', landSchema);
