import { useEffect, useState } from "react";
import API from "../services/api";

import AnalyticsSummary from "../components/analytics/AnalyticsSummary";
import MoodPieChart from "../components/analytics/MoodPieChart";
import MoodBarChart from "../components/analytics/MoodBarChart";
import InsightCards from "../components/analytics/InsightCards";

function Analytics() {
  const [failures, setFailures] = useState([]);

  useEffect(() => {
    const loadFailures = async () => {
      try {
        const response = await API.get("/failures");
        setFailures(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadFailures();
  }, []);

  // ===========================
  // Mood Statistics
  // ===========================

  const total = failures.length;

  const motivated = failures.filter(
    (item) => item.mood === "Motivated"
  ).length;

  const neutral = failures.filter(
    (item) => item.mood === "Neutral"
  ).length;

  const sad = failures.filter(
    (item) => item.mood === "Sad"
  ).length;

  // ===========================
  // Status Statistics
  // ===========================

  const newCount = failures.filter(
    (item) => item.status === "New"
  ).length;

  const working = failures.filter(
    (item) => item.status === "Working"
  ).length;

  const improved = failures.filter(
    (item) => item.status === "Improved"
  ).length;

  const mastered = failures.filter(
    (item) => item.status === "Mastered"
  ).length;

  // ===========================
  // Average Progress
  // ===========================

  const averageProgress =
    total === 0
      ? 0
      : Math.round(
          failures.reduce(
            (sum, item) => sum + (item.progress || 0),
            0
          ) / total
        );

  // ===========================
  // Success Rate
  // ===========================

  const successRate =
    total === 0
      ? 0
      : Math.round((mastered / total) * 100);

  // ===========================
  // Charts
  // ===========================

  const moodChartData = [
    {
      name: "Motivated",
      value: motivated,
    },
    {
      name: "Neutral",
      value: neutral,
    },
    {
      name: "Sad",
      value: sad,
    },
  ];

  const statusChartData = [
    {
      name: "New",
      value: newCount,
    },
    {
      name: "Working",
      value: working,
    },
    {
      name: "Improved",
      value: improved,
    },
    {
      name: "Mastered",
      value: mastered,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold">
          📊 Analytics Dashboard
        </h1>

        <p className="text-slate-500 mt-3">
          Track your personal growth using
          insights, charts and progress.
        </p>

        <AnalyticsSummary
          total={total}
          motivated={motivated}
          neutral={neutral}
          sad={sad}
          mastered={mastered}
          averageProgress={averageProgress}
          successRate={successRate}
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <MoodPieChart
            title="Mood Distribution"
            data={moodChartData}
          />

          <MoodBarChart
            title="Status Distribution"
            data={statusChartData}
          />

        </div>

        <InsightCards
          total={total}
          mastered={mastered}
          averageProgress={averageProgress}
          successRate={successRate}
          working={working}
          improved={improved}
        />

      </div>

    </div>
  );
}

export default Analytics;