function StatsSection() {
  const stats = [
    {
      number: "10K+",
      title: "Failures Logged",
      color: "text-cyan-400",
    },
    {
      number: "8K+",
      title: "Lessons Learned",
      color: "text-green-400",
    },
    {
      number: "95%",
      title: "Positive Growth",
      color: "text-yellow-400",
    },
    {
      number: "24/7",
      title: "AI Support",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 text-center border border-slate-800 hover:border-cyan-500 transition"
            >
              <h2 className={`text-5xl font-bold ${item.color}`}>
                {item.number}
              </h2>

              <p className="text-slate-300 mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default StatsSection;