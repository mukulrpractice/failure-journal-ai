function InsightCards({
  total,
  mastered,
  averageProgress,
  successRate,
  working,
  improved,
}) {
  const growthScore = Math.min(
    10,
    (
      averageProgress / 10 +
      successRate / 20
    ).toFixed(1)
  );

 const aiMessage =
  total === 0
    ? "Start adding your first failure to begin your growth journey."
    : working > improved
    ? "You have several failures still in progress. Focus on completing your action plans."
    : mastered >= 5
    ? "Excellent! You're consistently converting failures into success."
    : "Keep improving. Every completed action plan moves you closer to mastery.";

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      {/* AI Coach */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          🤖 AI Growth Coach
        </h2>

        <p className="text-slate-600 leading-8">
          {aiMessage}
        </p>

      </div>

      {/* Growth Score */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          📈 Growth Overview
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between">
            <span>Total Entries</span>

            <span className="font-bold">
              {total}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Average Progress</span>

            <span className="font-bold">
              {averageProgress}%
            </span>
          </div>

          <div className="flex justify-between">
            <span>Success Rate</span>

            <span className="font-bold">
              {successRate}%
            </span>
          </div>

          <div className="flex justify-between">
            <span>Growth Score</span>

            <span className="font-bold text-green-600">
              {growthScore}/10
            </span>
          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          🎯 Next Recommendation
        </h2>

        <ul className="space-y-3 text-slate-600">

          <li>✅ Update your progress regularly.</li>

          <li>✅ Complete action plans before target dates.</li>

          <li>✅ Review old failures weekly.</li>

          <li>✅ Convert "Working" entries into "Improved".</li>

        </ul>

      </div>

      {/* Motivation */}

      <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-lg p-8 text-white">

        <h2 className="text-2xl font-bold mb-6">
          💡 Today's Motivation
        </h2>

        <p className="leading-8 text-lg">
          Every successful person has a collection of failures.
          The difference is that they learned, improved and kept moving forward.
        </p>

      </div>

    </div>
  );
}

export default InsightCards;