const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateFailureAnalysis = async (failureData) => {
  const prompt = `
You are an expert mentor.

Analyze the user's failure.

Title:
${failureData.title}

Description:
${failureData.description}

Mood:
${failureData.mood}

Return ONLY valid JSON.

{
  "lesson":"...",
  "actionPlan":"...",
  "motivation":"..."
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  let text = completion.choices[0].message.content.trim();

// Remove markdown if present
text = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

try {
  return JSON.parse(text);
} catch (error) {
  console.error("Groq Response:", text);
  throw new Error("Invalid JSON received from AI.");
}
};

const generateAIInsights = async (failureData) => {
  const prompt = `
You are an experienced career mentor, software engineering coach and psychologist.

Analyze the user's failure deeply.

Title:
${failureData.title}

Description:
${failureData.description}

Mood:
${failureData.mood}

Your response must be practical, encouraging and actionable.

Return ONLY valid JSON.

{
  "rootCause": "",
  "strengths": [
    "",
    "",
    ""
  ],
  "improvementPlan": [
    "",
    "",
    "",
    ""
  ],
  "estimatedRecoveryDays": 0,
  "biggestRisk": "",
  "recommendedTopics": [
    "",
    "",
    ""
  ],
  "motivation": ""
}

Rules:

- rootCause should be 2-4 sentences.

- strengths must contain exactly 3 points.

- improvementPlan must contain exactly 4 practical steps.

- estimatedRecoveryDays should be an integer between 1 and 30.

- biggestRisk should explain what may happen if the issue is ignored.

- recommendedTopics should contain exactly 3 learning topics.

- motivation should be positive, realistic and encouraging.

Return ONLY JSON.

{
  "rootCause":"",
  "keyStrength":"",
  "improvementFocus":"",
  "positiveNote":""
}
`;

  const completion =
    await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.6,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  let text =
    completion.choices[0].message.content.trim();

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error(text);

    throw new Error(
      "Invalid AI response."
    );
  }
};

module.exports = {
  generateFailureAnalysis,
  generateAIInsights,
};