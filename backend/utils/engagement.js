const calculateEngagementScore = (user) => {
  const daysSinceLastLogin =
    (new Date() - new Date(user.lastLogin)) / (1000 * 60 * 60 * 24);
  let score = 100 - daysSinceLastLogin;
  score += user.engagementScore;
  return Math.max(score, 0);
};

const predictChurn = (user) => {
  const daysSinceLastLogin =
    (new Date() - new Date(user.lastLogin)) / (1000 * 60 * 60 * 24);
  return daysSinceLastLogin > 30 || user.engagementScore < 50
    ? "At Risk"
    : "Engaged";
};

module.exports = { calculateEngagementScore, predictChurn };
