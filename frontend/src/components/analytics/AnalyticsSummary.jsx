function AnalyticsSummary({
  total,
  motivated,
  neutral,
  sad,
  mastered,
  averageProgress,
  successRate,
}) {
  const growthScore = Math.min(
    10,
    (
      averageProgress / 10 +
      successRate / 20
    ).toFixed(1)
  );

  const cards = [
    {
      title: "📚 Total Entries",
      value: total,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "🏆 Success Rate",
      value: `${successRate}%`,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "📈 Avg Progress",
      value: `${averageProgress}%`,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "⭐ Growth Score",
      value: `${growthScore}/10`,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "😊 Motivated",
      value: motivated,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "😐 Neutral",
      value: neutral,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "😔 Sad",
      value: sad,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "🎯 Mastered",
      value: mastered,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg} rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300`}
        >
          <h3 className="text-slate-500 font-medium">
            {card.title}
          </h3>

          <p
            className={`text-4xl font-bold mt-4 ${card.color}`}
          >
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsSummary;