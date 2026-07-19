const mongoose = require("mongoose");

const failureSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

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

    // ===========================
    // Growth Tracking
    // ===========================

    actionPlan: {
      type: String,
      default: "",
      trim: true,
    },

    targetDate: {
      type: Date,
      default: null,
    },

    reminderEnabled: {
      type: Boolean,
      default: false,
    },

    reminderFrequency: {
      type: String,
      enum: [
        "Daily",
        "Every 3 Days",
        "Weekly",
      ],
      default: "Every 3 Days",
    },

    status: {
      type: String,
      enum: [
        "New",
        "Working",
        "Improved",
        "Mastered",
      ],
      default: "New",
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    successStory: {
      type: String,
      default: "",
      trim: true,
    },

// ===========================
// AI Insights
// ===========================

aiInsights: {
  rootCause: {
    type: String,
    default: "",
    trim: true,
  },

  strengths: {
    type: [String],
    default: [],
  },

  improvementPlan: {
    type: [String],
    default: [],
  },

  estimatedRecoveryDays: {
    type: Number,
    default: 0,
  },

  biggestRisk: {
    type: String,
    default: "",
    trim: true,
  },

  recommendedTopics: {
    type: [String],
    default: [],
  },

  motivation: {
    type: String,
    default: "",
    trim: true,
  },
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Failure",
  failureSchema
);