const express = require("express");
const {
  getUsers,
  addUser,
  getMetrics,
  getAIInsights,
} = require("../controllers/userController");
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", addUser);
router.get("/metrics", getMetrics);
router.get("/ai-insights", getAIInsights);

module.exports = router;
