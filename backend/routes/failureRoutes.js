const express = require("express");

const router = express.Router();

const {
  getAllFailures,
  createFailure,
  deleteFailure,
} = require("../controllers/failureController");

router.get("/", getAllFailures);

router.post("/", createFailure);

router.delete("/:id", deleteFailure);

module.exports = router;