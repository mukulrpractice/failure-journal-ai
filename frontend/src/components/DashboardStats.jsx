function DashboardStats({ failures }) {
  const total = failures.length;

  const motivated = failures.filter(
    (failure) => failure.mood === "Motivated"
  ).length;

  const neutral = failures.filter(
    (failure) => failure.mood === "Neutral"
  ).length;

  const sad = failures.filter(
    (failure) => failure.mood === "Sad"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      {/* Total */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-slate-500 font-medium">
          Total Failures
        </h3>

        <p className="text-4xl font-bold text-blue-600 mt-3">
          {total}
        </p>
      </div>

      {/* Motivated */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-slate-500 font-medium">
          Motivated
        </h3>

        <p className="text-4xl font-bold text-green-600 mt-3">
          {motivated}
        </p>
      </div>

      {/* Neutral */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-slate-500 font-medium">
          Neutral
        </h3>

        <p className="text-4xl font-bold text-yellow-500 mt-3">
          {neutral}
        </p>
      </div>

      {/* Sad */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-slate-500 font-medium">
          Sad
        </h3>

        <p className="text-4xl font-bold text-red-600 mt-3">
          {sad}
        </p>
      </div>
    </div>
  );
}

export default DashboardStats;