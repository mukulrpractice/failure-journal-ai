const {
  generateFailureAnalysis,
  generateAIInsights,
} = require("../services/groqService");

const Failure = require("../models/Failure");

const analyzeFailure = async (req, res) => {
  try {
    const { title, description, mood } = req.body;

    if (!title || !description || !mood) {
      return res.status(400).json({
        message: "Title, description and mood are required.",
      });
    }

    const result = await generateFailureAnalysis({
      title,
      description,
      mood,
    });

    res.status(200).json(result);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI analysis failed.",
    });
  }
};

const generateInsights = async (req, res) => {
  try {
    const { failureId } = req.params;

    const failure = await Failure.findById(failureId);

    if (!failure) {
      return res.status(404).json({
        message: "Failure not found.",
      });
    }

    const insights = await generateAIInsights({
      title: failure.title,
      description: failure.description,
      mood: failure.mood,
    });

    failure.aiInsights = insights;

    await failure.save();

    res.status(200).json(insights);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate AI insights.",
    });
  }
};

module.exports = {
  analyzeFailure,
   generateInsights,
};