const User = require("../models/User");
const {
  calculateEngagementScore,
  predictChurn,
} = require("../utils/engagement");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const addUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
};

const getMetrics = async (req, res) => {
  const users = await User.find();
  const activeUsers = users.filter(
    (u) => new Date() - new Date(u.lastLogin) < 7 * 24 * 60 * 60 * 1000
  ).length;
  const retentionRate =
    (users.filter((u) => u.retentionCategory === "High").length /
      users.length) *
    100;
  res.json({ activeUsers, retentionRate });
};

const getAIInsights = async (req, res) => {
  const users = await User.find();
  const atRiskUsers = users.filter((u) => predictChurn(u) === "At Risk");
  res.json({
    suggestions: [
      "Offer re-engagement emails to at-risk users.",
      "Enhance features that drive engagement.",
    ],
    atRiskUsers,
  });
};

module.exports = { getUsers, addUser, getMetrics, getAIInsights };
