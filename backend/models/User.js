const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  lastLogin: Date,
  engagementScore: Number,
  retentionCategory: String
});

module.exports = mongoose.model('User', userSchema);
