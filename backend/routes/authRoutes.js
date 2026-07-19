const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getCurrentUser);

module.exports = router;