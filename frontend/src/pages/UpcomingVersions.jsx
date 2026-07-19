function UpcomingVersions() {
  const versions = [
    {
      version: "v1.0 (Current)",
      status: "Released",
      color: "green",
      features: [
        "Authentication & Secure Login",
        "Failure Journal Management",
        "AI Lesson Generator",
        "AI Mentor Insights",
        "Dashboard Analytics",
        "Progress Tracking",
        "Target Date & Reminder",
        "PDF Export",
        "Search & Filter",
      ],
    },
    {
      version: "v1.5",
      status: "In Development",
      color: "yellow",
      features: [
        "Dark Mode Improvements",
        "Advanced Dashboard Widgets",
        "Better PDF Reports",
        "Performance Optimizations",
      ],
    },
    {
      version: "v2.0",
      status: "Planned",
      color: "blue",
      features: [
        "AI Weekly Coach",
        "Google Calendar Integration",
        "Email Reminder System",
        "AI Habit Tracking",
      ],
    },
    {
      version: "v3.0",
      status: "Research",
      color: "purple",
      features: [
        "Voice Journal",
        "Speech-to-Text",
        "AI Growth Prediction",
        "Community Learning",
      ],
    },
  ];

  const badge = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold text-slate-800">
          🚀 Upcoming Versions
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Failure Journal AI is designed to evolve continuously.
          Below is the planned product roadmap for future releases.
        </p>

        <div className="mt-12 space-y-8">

          {versions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8"
            >
              <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold">
                  {item.version}
                </h2>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${badge[item.color]}`}
                >
                  {item.status}
                </span>

              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">

                {item.features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-200"
                  >
                    ✅ {feature}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="mt-12 bg-linear-to-r from-blue-600 to-purple-700 text-white rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            💡 Product Vision
          </h2>

          <p className="mt-4 leading-8 text-lg">
            Some advanced AI capabilities and automation
            are planned for future releases because they
            depend on premium AI services, cloud
            integrations and enterprise infrastructure.
            The current version focuses on delivering a
            stable, secure and production-ready experience.
          </p>

        </div>

      </div>
    </div>
  );
}

export default UpcomingVersions;