import { exportFailuresToCSV } from "../utils/exportCSV";
import { exportFailuresToPDF } from "../utils/exportPDF";

function SearchFilterBar({
  searchTerm,
  setSearchTerm,
  selectedMood,
  setSelectedMood,
  sortOption,
  setSortOption,
  failures,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 my-8">

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search failures..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Mood Filter */}
      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Moods</option>
        <option value="Motivated">Motivated</option>
        <option value="Neutral">Neutral</option>
        <option value="Sad">Sad</option>
      </select>

      {/* Sort */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Newest">🆕 Newest</option>
        <option value="Oldest">📜 Oldest</option>
        <option value="A-Z">🔤 Title A-Z</option>
        <option value="Z-A">🔠 Title Z-A</option>
      </select>

      {/* Export CSV */}
      <button
        onClick={() => exportFailuresToCSV(failures)}
        className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition"
      >
        📥 Export CSV
      </button>

      {/* Export PDF */}
      <button
            onClick={() => exportFailuresToPDF(failures)}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 transition"
             >
              📄 Export PDF
      </button>

    </div>
  );
}

export default SearchFilterBar;