const express = require("express");

const router = express.Router();

const {
  analyzeFailure,
  generateInsights,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

router.post("/analyze", protect, analyzeFailure);
router.post(
  "/insights/:failureId",
  protect,
  generateInsights
);

module.exports = router;