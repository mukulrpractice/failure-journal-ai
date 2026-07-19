function Achievements({
  total,
  mastered,
  improved,
  averageProgress,
}) {
  const achievements = [
    {
      icon: "🌱",
      title: "First Step",
      description: "Add your first failure",
      unlocked: total >= 1,
    },
    {
      icon: "📘",
      title: "Learner",
      description: "Add 5 journal entries",
      unlocked: total >= 5,
    },
    {
      icon: "🔥",
      title: "Consistent",
      description: "Add 10 journal entries",
      unlocked: total >= 10,
    },
    {
      icon: "⭐",
      title: "Improver",
      description: "Improve 5 failures",
      unlocked: improved >= 5,
    },
    {
      icon: "👑",
      title: "Master",
      description: "Master 10 failures",
      unlocked: mastered >= 10,
    },
    {
      icon: "🚀",
      title: "Growth Champion",
      description: "Reach 80% average progress",
      unlocked: averageProgress >= 80,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">
        🏆 Achievements
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((badge) => (
          <div
            key={badge.title}
            className={`rounded-2xl border-2 p-6 transition-all duration-300 ${
              badge.unlocked
                ? "border-green-500 bg-green-50"
                : "border-slate-200 bg-slate-100 opacity-60"
            }`}
          >
            <div className="text-5xl mb-4">
              {badge.unlocked ? badge.icon : "🔒"}
            </div>

            <h3 className="text-xl font-bold">
              {badge.title}
            </h3>

            <p className="text-slate-500 mt-2">
              {badge.description}
            </p>

            <div className="mt-5">
              {badge.unlocked ? (
                <span className="text-green-700 font-semibold">
                  ✅ Unlocked
                </span>
              ) : (
                <span className="text-slate-500">
                  🔒 Locked
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;