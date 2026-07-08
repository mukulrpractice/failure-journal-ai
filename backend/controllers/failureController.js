const Failure = require("../models/Failure");

// GET All Failures
const getAllFailures = async (req, res) => {
  try {
    const failures = await Failure.find().sort({ createdAt: -1 });

    res.status(200).json(failures);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE Failure
const createFailure = async (req, res) => {
  try {
    const { title, description, lesson, mood } = req.body;

    const failure = await Failure.create({
      title,
      description,
      lesson,
      mood,
    });

    res.status(201).json({
      message: "Failure Added Successfully",
      data: failure,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE Failure
const deleteFailure = async (req, res) => {
  try {
    const { id } = req.params;

    const failure = await Failure.findByIdAndDelete(id);

    if (!failure) {
      return res.status(404).json({
        message: "Failure not found",
      });
    }

    res.status(200).json({
      message: "Failure Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllFailures,
  createFailure,
  deleteFailure,
};