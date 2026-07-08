const mongoose = require("mongoose");

const failureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    lesson: {
      type: String,
      required: true,
      trim: true,
    },

    mood: {
      type: String,
      enum: ["Sad", "Neutral", "Motivated"],
      default: "Neutral",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Failure", failureSchema);