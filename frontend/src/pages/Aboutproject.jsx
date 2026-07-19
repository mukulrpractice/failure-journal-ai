function AboutProject() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Hero */}
        <div className="bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl shadow-xl p-10 text-white">

          <h1 className="text-5xl font-bold">
            Failure Journal
          </h1>

          <p className="text-xl mt-4 text-blue-100">
            Learn from every failure. Grow with every lesson.
          </p>

        </div>

        {/* Overview */}
        <div className="bg-white rounded-2xl shadow p-8 mt-8">

          <h2 className="text-3xl font-bold mb-5">
            📖 Project Overview
          </h2>

          <p className="text-slate-600 leading-8">
            Failure Journal is a Full Stack MERN application
            that helps users document failures, reflect on
            lessons learned, and continuously improve.
            Instead of forgetting mistakes, users maintain
            a structured journal that transforms failures
            into valuable learning experiences.
          </p>

        </div>

        {/* Problem */}
        <div className="bg-white rounded-2xl shadow p-8 mt-8">

          <h2 className="text-3xl font-bold mb-5">
            ❓ Problem Statement
          </h2>

          <p className="text-slate-600 leading-8">
            People usually remember their achievements but
            rarely document their failures. As a result,
            the same mistakes are repeated. This project
            encourages self-reflection by recording failures
            together with lessons learned.
          </p>

        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow p-8 mt-8">

          <h2 className="text-3xl font-bold mb-6">
            ✨ Current Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="bg-slate-100 rounded-xl p-5">
              ➕ Add Failure
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              ✏️ Edit Failure
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              🗑 Delete Failure
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              🔍 Search Entries
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              😊 Mood Filter
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              📊 Dashboard
            </div>

          </div>

        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow p-8 mt-8">

          <h2 className="text-3xl font-bold mb-6">
            🛠 Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-700">
                Frontend
              </h3>

              <ul className="mt-3 space-y-2">
                <li>React</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-bold text-green-700">
                Backend
              </h3>

              <ul className="mt-3 space-y-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST API</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-5">
              <h3 className="font-bold text-purple-700">
                Database
              </h3>

              <ul className="mt-3 space-y-2">
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-5">
              <h3 className="font-bold text-orange-700">
                Tools
              </h3>

              <ul className="mt-3 space-y-2">
                <li>Git</li>
                <li>GitHub</li>
                <li>Netlify</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Future */}
        <div className="bg-white rounded-2xl shadow p-8 mt-8">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Future Enhancements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="bg-slate-100 rounded-xl p-5">
              🔐 User Authentication
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              🌙 Dark Mode
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              🤖 AI-powered Insights
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              📤 Export PDF / CSV
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              ☁ Cloud Backup
            </div>

            <div className="bg-slate-100 rounded-xl p-5">
              🔔 Smart Reminders
            </div>

          </div>

        </div>

         {/* Developer */}
        <div className="bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl shadow-xl p-10 mt-8 text-center text-white">

          <h2 className="text-3xl font-bold">
            👨‍💻 Developer
          </h2>

          <p className="mt-5 text-xl font-semibold">
            Mukul Rane
          </p>

          <p className="mt-2 text-slate-300">
            Full Stack Developer
          </p>

          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-slate-400">
              Built with React, Node.js, Express.js,
              MongoDB and Tailwind CSS.
            </p>
          </div>

        </div>


        

      </div>
    </div>
    
    


  );
}

export default AboutProject;