const express = require("express");

const router = express.Router();

const {
  getAllFailures,
  createFailure,
  deleteFailure,
  updateFailure,
} = require("../controllers/failureController");

router.get("/", getAllFailures);

router.post("/", createFailure);

router.delete("/:id", deleteFailure);

router.put("/:id", updateFailure);

module.exports = router;