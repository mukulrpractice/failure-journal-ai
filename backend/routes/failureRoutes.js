const express = require("express");
const router = express.Router();

const {
  getAllFailures,
  createFailure,
  updateFailure,
  deleteFailure,
} = require("../controllers/failureController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getAllFailures);

router.post("/", protect, createFailure);

router.put("/:id", protect, updateFailure);

router.delete("/:id", protect, deleteFailure);

module.exports = router;