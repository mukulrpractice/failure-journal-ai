function DeveloperSection() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold">
            👨‍💻 Meet the Developer
          </span>

          <h2 className="text-5xl font-bold text-white mt-8">
            Built with Passion
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Failure Journal is an independent full-stack project
            built to demonstrate modern software engineering,
            clean architecture, authentication, analytics,
            and AI-powered productivity features.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Card */}

          <div className="bg-slate-800 rounded-3xl p-10 shadow-xl">

            <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-5xl mx-auto">
              👨
            </div>

            <h3 className="text-3xl font-bold text-white text-center mt-8">
              Mukul Rane
            </h3>

            <p className="text-cyan-400 text-center mt-2 font-semibold">
              Full Stack MERN Developer
            </p>

            <div className="mt-10 space-y-4 text-slate-300">

              <p>🎓 Computer Engineering (2026)</p>

              <p>🏫 Savitribai Phule Pune University</p>

              <p>💻 Passionate about Full Stack Development</p>

              <p>🤖 Exploring AI Powered Applications</p>

              <p>🚀 Building Real World Projects</p>

            </div>

          </div>

          {/* Right Card */}

          <div className="bg-slate-800 rounded-3xl p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-white mb-8">
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                ⚛ React
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                🟢 Node.js
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                🚀 Express
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                🍃 MongoDB
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                🔐 JWT
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                🎨 Tailwind CSS
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                📊 REST APIs
              </div>

              <div className="bg-slate-700 rounded-xl p-4 text-center text-white">
                🤖 AI Integration
              </div>

            </div>

            <div className="mt-10 bg-slate-700 rounded-2xl p-6">

              <h4 className="text-white text-xl font-bold">
                Current Project
              </h4>

              <p className="text-slate-300 mt-3 leading-7">
                Failure Journal is designed to help users
                transform failures into learning opportunities
                using analytics, AI insights, secure authentication,
                and cloud-ready architecture.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DeveloperSection;