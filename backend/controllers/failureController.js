const Failure = require("../models/Failure");

// ===============================
// GET All Failures
// ===============================
const getAllFailures = async (req, res) => {
  try {
    const failures = await Failure.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(failures);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// CREATE Failure
// ===============================
const createFailure = async (req, res) => {
  try {
    const failure = await Failure.create({
      user: req.user._id,

      title: req.body.title,
      description: req.body.description,
      lesson: req.body.lesson,
      mood: req.body.mood,

      actionPlan: req.body.actionPlan,
      targetDate: req.body.targetDate,

      reminderEnabled:
        req.body.reminderEnabled,

      reminderFrequency:
        req.body.reminderFrequency,

      status: req.body.status,

      progress: req.body.progress,

      successStory:
        req.body.successStory,
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

// ===============================
// UPDATE Failure
// ===============================
const updateFailure = async (req, res) => {
  try {
    const failure = await Failure.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!failure) {
      return res.status(404).json({
        message: "Failure not found",
      });
    }

    Object.assign(failure, req.body);

    const updatedFailure =
      await failure.save();

    res.status(200).json({
      message: "Failure Updated Successfully",
      data: updatedFailure,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// DELETE Failure
// ===============================
const deleteFailure = async (req, res) => {
  try {
    const failure = await Failure.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!failure) {
      return res.status(404).json({
        message: "Failure not found",
      });
    }

    await failure.deleteOne();

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
  updateFailure,
  deleteFailure,
};