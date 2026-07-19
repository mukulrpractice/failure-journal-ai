import FailureCard from "./FailureCard";

function FailureList({
  failures,
  handleEdit,
  handleDelete,
  fetchFailures,
}) {
  return (
    <section className="mt-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Recent Failures
          </h2>

          <p className="text-slate-500 mt-1">
            Review your past experiences and lessons.
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
          Showing {failures.length}{" "}
          {failures.length === 1 ? "Entry" : "Entries"}
        </span>
      </div>

      {failures.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-12 text-center">
          <div className="text-6xl mb-4">📭</div>

          <h3 className="text-2xl font-bold text-slate-700">
            No failures found
          </h3>

          <p className="text-slate-500 mt-3">
            Add a new failure or change your search/filter.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {failures.map((failure) => (
           <FailureCard
                   key={failure._id}
                   failure={failure}
                   handleEdit={handleEdit}
                   handleDelete={handleDelete}
                   fetchFailures={fetchFailures}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FailureList;