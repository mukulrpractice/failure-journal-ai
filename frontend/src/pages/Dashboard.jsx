import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function Dashboard() {
  const [failures, setFailures] = useState([]);

  useEffect(() => {
    const fetchFailures = async () => {
      try {
        const response = await API.get("/failures");
        setFailures(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load dashboard");
      }
    };

    fetchFailures();
  }, []);

  const total = failures.length;

  const newCount = failures.filter(
    (f) => f.status === "New"
  ).length;

  const working = failures.filter(
    (f) => f.status === "Working"
  ).length;

  const improved = failures.filter(
    (f) => f.status === "Improved"
  ).length;

  const mastered = failures.filter(
    (f) => f.status === "Mastered"
  ).length;

  const avgProgress =
    total === 0
      ? 0
      : Math.round(
          failures.reduce(
            (sum, item) => sum + (item.progress || 0),
            0
          ) / total
        );

  const reminders = failures.filter(
    (f) => f.reminderEnabled
  );

  const recentFailures = failures.slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          📊 Dashboard
        </h1>

        <p className="text-slate-600 mt-2">
          Track your growth journey.
        </p>

        {/* Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <Card
            title="Total Failures"
            value={total}
            color="text-blue-600"
          />

          <Card
            title="New"
            value={newCount}
            color="text-cyan-600"
          />

          <Card
            title="Working"
            value={working}
            color="text-yellow-500"
          />

          <Card
            title="Improved"
            value={improved}
            color="text-green-600"
          />

          <Card
            title="Mastered"
            value={mastered}
            color="text-purple-600"
          />

          <Card
            title="Average Progress"
            value={`${avgProgress}%`}
            color="text-indigo-600"
          />

        </div>

        {/* Progress */}

        <div className="bg-white rounded-2xl shadow p-8 mt-10">

          <h2 className="text-2xl font-bold mb-5">
            📈 Overall Progress
          </h2>

          <div className="w-full bg-slate-200 rounded-full h-6">

            <div
              className="bg-green-500 h-6 rounded-full transition-all duration-700"
              style={{
                width: `${avgProgress}%`,
              }}
            />

          </div>

          <p className="mt-3 font-semibold">
            {avgProgress}% Completed
          </p>

        </div>

        {/* Reminder */}

        <div className="bg-white rounded-2xl shadow p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            🔔 Active Reminders
          </h2>

          {reminders.length === 0 ? (
            <p>No reminders enabled.</p>
          ) : (
            reminders.map((item) => (
              <div
                key={item._id}
                className="border rounded-xl p-4 mb-4"
              >
                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-2">
                  {item.reminderFrequency}
                </p>
              </div>
            ))
          )}

        </div>

        {/* Recent */}

        <div className="bg-white rounded-2xl shadow p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            🕒 Recent Activity
          </h2>

          {recentFailures.length === 0 ? (
            <p>No activity yet.</p>
          ) : (
            recentFailures.map((item) => (
              <div
                key={item._id}
                className="border rounded-xl p-4 mb-4"
              >
                <div className="flex justify-between">

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <span>
                    {item.status}
                  </span>

                </div>

                <p className="mt-2 text-slate-600">
                  Progress : {item.progress}%
                </p>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}

function Card({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h3 className="text-slate-500">
        {title}
      </h3>

      <p className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </p>

    </div>
  );
}

export default Dashboard;