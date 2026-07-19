import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

import { exportFailuresToPDF } from "../utils/exportPDF";


function FailureCard({
  failure,
  handleEdit,
  handleDelete,
  fetchFailures,
}) {
  const [loadingInsights, setLoadingInsights] =
  useState(false);
  const moodStyles = {
    Motivated:
      "bg-green-100 text-green-700 border-green-200",
    Neutral:
      "bg-yellow-100 text-yellow-700 border-yellow-200",
    Sad:
      "bg-red-100 text-red-700 border-red-200",
  };

  const statusStyles = {
    New: "bg-blue-100 text-blue-700",
    Working: "bg-yellow-100 text-yellow-700",
    Improved: "bg-green-100 text-green-700",
    Mastered: "bg-purple-100 text-purple-700",
  };

  const progressColor = () => {
  if (failure.progress < 30)
    return "bg-red-500";

  if (failure.progress < 60)
    return "bg-yellow-500";

  if (failure.progress < 90)
    return "bg-blue-500";

  return "bg-green-500";
};

  const today = new Date();

const targetDate = failure.targetDate
  ? new Date(failure.targetDate)
  : null;

const isOverdue =
  targetDate &&
  targetDate < today &&
  failure.status !== "Mastered";

const isDueSoon =
  targetDate &&
  failure.status !== "Mastered" &&
  !isOverdue &&
  targetDate - today <=
    3 * 24 * 60 * 60 * 1000;


const handleGenerateInsights = async () => {
  try {
    setLoadingInsights(true);

  await API.post(
  `/ai/insights/${failure._id}`
     );

    toast.success("AI Insights Generated!");

    await fetchFailures();

  } catch (error) {
    console.error(error);

    toast.error("Failed to generate AI insights.");
  } finally {
    setLoadingInsights(false);
  }
};

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl transition">

      {/* Header */}

      <div className="flex justify-between items-start gap-4">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            {failure.title}
          </h2>

          <p className="text-slate-500 mt-2">
            {new Date(
              failure.createdAt
            ).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-col gap-2">

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${moodStyles[failure.mood]}`}
          >
            {failure.mood}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[failure.status]}`}
          >
            {failure.status}
          </span>

        </div>

      </div>

      {/* Description */}

      <div className="mt-8">

        <h3 className="font-bold text-slate-700">
          📖 Description
        </h3>

        <p className="mt-2 text-slate-600">
          {failure.description}
        </p>

      </div>

      {/* Lesson */}

      <div className="mt-6">

        <h3 className="font-bold text-slate-700">
          💡 Lesson Learned
        </h3>

        <p className="mt-2 text-slate-600">
          {failure.lesson}
        </p>

      </div>

      {/* Action Plan */}

      {failure.actionPlan && (
        <div className="mt-6">

          <h3 className="font-bold text-slate-700">
            🎯 Action Plan
          </h3>

          <p className="mt-2 text-slate-600">
            {failure.actionPlan}
          </p>

        </div>
      )}

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between">

          <span className="font-semibold">
            Progress
          </span>

          <span>
            {failure.progress}%
          </span>

        </div>

        <div className="w-full bg-slate-200 rounded-full h-4 mt-3">

          <div
               className={`${progressColor()} h-4 rounded-full transition-all duration-500`}
               style={{
                width: `${failure.progress}%`,
                 }}
          />

          <p className="text-sm text-slate-500 mt-2">
             {failure.progress === 100
             ? "🎉 Goal Achieved"
             : failure.progress >= 75
             ? "🔥 Almost There"
             : failure.progress >= 40
             ? "💪 Keep Going"
             : "🚀 Just Started"}
          </p>

        </div>

      </div>

      {/* Target Date */}

      {failure.targetDate && (
        <div className="mt-6">

          <h3 className="font-bold text-slate-700">
            📅 Target Date
          </h3>

          <p className="mt-2 text-slate-600">
            {new Date(
              failure.targetDate
            ).toLocaleDateString()}
          </p>
           {isOverdue && (
      <p className="text-red-600 font-semibold mt-2">
        ⚠ Goal Overdue
      </p>
    )}

    {isDueSoon && (
      <p className="text-orange-500 font-semibold mt-2">
        ⏳ Due Soon
      </p>
    )}

        </div>
      )}

      {/* Reminder */}

      {failure.reminderEnabled && (
        <div className="mt-6">

          <h3 className="font-bold text-slate-700">
            🔔 Reminder
          </h3>

          <p className="mt-2 text-slate-600">
            {failure.reminderFrequency}
          </p>

        </div>
      )}

      {/* Success Story */}

      {failure.successStory && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">

          <h3 className="font-bold text-green-700">
            🏆 Success Story
          </h3>

          <p className="mt-3 text-green-800">
            {failure.successStory}
          </p>

        </div>
      )}

      {/* ================= AI Insights ================= */}

{failure.aiInsights &&
failure.aiInsights.rootCause && (

<div className="mt-8 bg-linear-to-br from-slate-50 to-blue-50 border border-blue-200 rounded-2xl p-6">

<h2 className="text-2xl font-bold text-blue-700 mb-6">
🧠 AI Mentor
</h2>

{/* Root Cause */}

<div className="mb-6">

<h3 className="font-bold text-slate-800 text-lg">
🎯 Root Cause
</h3>

<p className="mt-2 text-slate-600 leading-7">
{failure.aiInsights.rootCause}
</p>

</div>

{/* Strengths */}

{failure.aiInsights.strengths?.length > 0 && (

<div className="mb-6">

<h3 className="font-bold text-green-700 text-lg">
💪 Your Strengths
</h3>

<ul className="mt-3 space-y-2">

{failure.aiInsights.strengths.map((item,index)=>(

<li
key={index}
className="flex gap-2"
>

<span>✅</span>

<span>{item}</span>

</li>

))}

</ul>

</div>

)}

{/* Improvement Plan */}

{failure.aiInsights.improvementPlan?.length > 0 && (

<div className="mb-6">

<h3 className="font-bold text-orange-700 text-lg">
📈 Improvement Plan
</h3>

<ul className="mt-3 space-y-2">

{failure.aiInsights.improvementPlan.map((step,index)=>(

<li
key={index}
className="flex gap-2"
>

<span>🚀</span>

<span>{step}</span>

</li>

))}

</ul>

</div>

)}

{/* Recovery */}

<div className="mb-6">

<h3 className="font-bold text-purple-700 text-lg">
⏳ Estimated Recovery
</h3>

<p className="mt-2 text-slate-600">

{failure.aiInsights.estimatedRecoveryDays} Days

</p>

</div>

{/* Biggest Risk */}

<div className="mb-6">

<h3 className="font-bold text-red-700 text-lg">
⚠ Biggest Risk
</h3>

<p className="mt-2 text-slate-600 leading-7">
{failure.aiInsights.biggestRisk}
</p>

</div>

{/* Topics */}

{failure.aiInsights.recommendedTopics?.length > 0 && (

<div className="mb-6">

<h3 className="font-bold text-blue-700 text-lg">
📚 Recommended Topics
</h3>

<div className="flex flex-wrap gap-3 mt-3">

{failure.aiInsights.recommendedTopics.map((topic,index)=>(

<span
key={index}
className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
>

{topic}

</span>

))}

</div>

</div>

)}

{/* Motivation */}

<div className="bg-green-50 border border-green-200 rounded-xl p-5">

<h3 className="font-bold text-green-700 text-lg mb-2">
🌟 Motivation
</h3>

<p className="text-green-800 leading-7">

{failure.aiInsights.motivation}

</p>

</div>

</div>

)}

      {/* Buttons */}

      <div className="mt-10 flex gap-4">

        <button
          onClick={() => handleEdit(failure)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() =>
            handleDelete(failure._id)
          }
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
        >
          🗑 Delete
        </button>

        <button
              onClick={() =>
              exportFailuresToPDF([], failure)
               } 
              className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition"
              >
              📄 Export PDF
        </button>

        <button
                    onClick={handleGenerateInsights}
                   disabled={loadingInsights}
                  className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white px-6 py-3 rounded-xl transition"
                          >
                        {loadingInsights
                        ? "Generating..."
                        : failure.aiInsights?.rootCause
                        ? "🔄 Regenerate AI Insights"
                         : "🧠 Generate AI Insights"}
        </button>


      </div>

    </div>
  );
}

export default FailureCard;