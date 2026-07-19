import { Link } from "react-router-dom";
import DeveloperSection from "../components/DeveloperSection";
import StatsSection from "../components/StatsSection";

function Landing() {
  return (
  <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950">

    {/* Navbar */}

    <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl">
          📘
        </div>

        <div>

          <h1 className="text-white text-3xl font-bold">
            Failure Journal
          </h1>

          <p className="text-blue-200">
            Learn • Improve • Grow
          </p>

        </div>

      </div>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition"
        >
          Register
        </Link>

      </div>

    </nav>

    {/* Hero */}

    <section className="max-w-7xl mx-auto px-8 py-24">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="bg-blue-600 text-white px-5 py-2 rounded-full">
            🚀 AI Powered Personal Growth Platform
          </span>

          <h1 className="text-6xl font-extrabold text-white mt-8 leading-tight">

            Turn Every

            <span className="text-cyan-400">
              {" "}
              Failure
            </span>

            <br />

            Into Your

            <span className="text-green-400">
              {" "}
              Greatest Success
            </span>

          </h1>

          <p className="text-blue-100 text-xl mt-8 leading-9">

            Failure Journal helps students,
            professionals and developers
            transform failures into valuable
            learning experiences using
            analytics, AI insights,
            mood tracking and progress reports.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition"
            >
              Login
            </Link>

          </div>

        </div>

        <div>

          <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-10 shadow-2xl">

            <h2 className="text-white text-3xl font-bold mb-8">

              Why Choose Failure Journal?

            </h2>

            <div className="space-y-5 text-lg">

              <p className="text-green-300">
                ✅ Track every failure
              </p>

              <p className="text-cyan-300">
                📈 Growth Analytics
              </p>

              <p className="text-yellow-300">
                😊 Mood Tracking
              </p>

              <p className="text-pink-300">
                🤖 AI Recommendations
              </p>

              <p className="text-purple-300">
                📄 PDF Reports
              </p>

              <p className="text-orange-300">
                ☁ Cloud Backup
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

    <DeveloperSection/>
    <StatsSection />

  </div>
);
}

export default Landing;