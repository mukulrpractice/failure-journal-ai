import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import FailureForm from "../components/FailureForm";
import FailureList from "../components/FailureList";
import SearchFilterBar from "../components/SearchFilterBar";





function Home() {
  const [failures, setFailures] = useState([]);

  const [lessonError, setLessonError] = useState("");

  const [formData, setFormData] = useState({
  title: "",
  description: "",
  lesson: "",
  mood: "Neutral",

  actionPlan: "",
  targetDate: "",

  reminderEnabled: false,
  reminderFrequency: "Every 3 Days",

  status: "New",

  progress: 0,

  successStory: "",
});

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMood, setSelectedMood] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");

  // Fetch all failures
  const fetchFailures = async () => {
    try {
      const response = await API.get("/failures");
      setFailures(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load failures");
    }
  };

  // Load data on page load
  useEffect(() => {
    const loadFailures = async () => {
      await fetchFailures();
    };

    loadFailures();
  }, []);

  // Handle input change
  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]:
      type === "checkbox"
        ? checked
        : value,
  });
};

  // Save or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

   if (!formData.lesson.trim()) {

  setLessonError(
    "Every failure teaches something. Please write at least one lesson learned."
  );

  return;
}

setLessonError("");




    try {
      let response;

      if (editingId) {
        response = await API.put(
          `/failures/${editingId}`,
          formData
        );

        toast.success(response.data.message);
        setEditingId(null);
      } else {
        response = await API.post(
          "/failures",
          formData
        );

        toast.success(response.data.message);
      }

      await fetchFailures();

      setFormData({
  title: "",
  description: "",
  lesson: "",
  mood: "Neutral",

  actionPlan: "",
  targetDate: "",

  reminderEnabled: false,
  reminderFrequency: "Every 3 Days",

  status: "New",

  progress: 0,

  successStory: "",
});
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  // Delete Failure
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this failure?"
    );

    if (!confirmDelete) return;

    try {
      const response = await API.delete(
        `/failures/${id}`
      );

      toast.success(response.data.message);

      await fetchFailures();
    } catch (error) {
      console.log(error);
      toast.error("Delete failed!");
    }
  };

  const filteredFailures = failures.filter((failure) => {
  const matchesSearch =
    failure.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    failure.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesMood =
    selectedMood === "All" ||
    failure.mood === selectedMood;

  return matchesSearch && matchesMood;
});
  const sortedFailures = [...filteredFailures].sort((a, b) => {
  switch (sortOption) {
    case "Newest":
      return (
        new Date(b.createdAt) -
        new Date(a.createdAt)
      );

    case "Oldest":
      return (
        new Date(a.createdAt) -
        new Date(b.createdAt)
      );

    case "A-Z":
      return a.title.localeCompare(b.title);

    case "Z-A":
      return b.title.localeCompare(a.title);

    default:
      return 0;
  }
});
const today = new Date();

today.setHours(0, 0, 0, 0);

const dueToday = sortedFailures.filter((failure) => {
  if (!failure.targetDate) return false;

  const target = new Date(failure.targetDate);

  target.setHours(0, 0, 0, 0);

  return (
    target.getTime() === today.getTime() &&
    failure.status !== "Mastered"
  );
});

const dueSoon = sortedFailures.filter((failure) => {
  if (!failure.targetDate) return false;

  const target = new Date(failure.targetDate);

  target.setHours(0, 0, 0, 0);

  const diff =
    target.getTime() - today.getTime();

  return (
    diff > 0 &&
    diff <= 3 * 24 * 60 * 60 * 1000 &&
    failure.status !== "Mastered"
  );
});

const overdue = sortedFailures.filter((failure) => {
  if (!failure.targetDate) return false;

  const target = new Date(failure.targetDate);

  target.setHours(0, 0, 0, 0);

  return (
    target < today &&
    failure.status !== "Mastered"
  );
});



    



  
  // Edit Failure
  const handleEdit = (failure) => {
    setEditingId(failure._id);

   setFormData({
  title: failure.title,
  description: failure.description,
  lesson: failure.lesson,
  mood: failure.mood,

  actionPlan: failure.actionPlan || "",

  targetDate: failure.targetDate
    ? failure.targetDate.substring(0, 10)
    : "",

  reminderEnabled:
    failure.reminderEnabled || false,

  reminderFrequency:
    failure.reminderFrequency ||
    "Every 3 Days",

  status: failure.status || "New",

  progress: failure.progress || 0,

  successStory:
    failure.successStory || "",
});
  };

  return (
    <>
      

      <div className="min-h-screen bg-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-5xl font-extrabold text-slate-900">
            Failure Journal
          </h1>

          <p className="text-slate-600 mt-3 text-lg">
            Turn every failure into your next success.
          </p>
           

         <div className="mt-8 bg-white rounded-2xl shadow-lg border border-slate-200 p-6">

  <h2 className="text-2xl font-bold text-slate-800 mb-5">
    🔔 Goal Reminders
  </h2>

  {dueToday.length === 0 &&
   dueSoon.length === 0 &&
   overdue.length === 0 ? (

    <p className="text-slate-500">
      🎉 No upcoming reminders.
    </p>

  ) : (

    <div className="space-y-4">

      {overdue.map((failure) => (
        <div
          key={`overdue-${failure._id}`}
          className="border-l-4 border-red-500 bg-red-50 rounded-xl p-4"
        >
          <h3 className="font-bold text-red-700">
            ⚠ {failure.title}
          </h3>

          <p className="text-sm text-slate-600 mt-1">
            Goal is overdue.
          </p>
        </div>
      ))}

      {dueToday.map((failure) => (
        <div
          key={`today-${failure._id}`}
          className="border-l-4 border-blue-500 bg-blue-50 rounded-xl p-4"
        >
          <h3 className="font-bold text-blue-700">
            📅 {failure.title}
          </h3>

          <p className="text-sm text-slate-600 mt-1">
            Due Today
          </p>
        </div>
      ))}

      {dueSoon.map((failure) => (
        <div
          key={`soon-${failure._id}`}
          className="border-l-4 border-yellow-500 bg-yellow-50 rounded-xl p-4"
        >
          <h3 className="font-bold text-yellow-700">
            ⏳ {failure.title}
          </h3>

          <p className="text-sm text-slate-600 mt-1">
            Due Soon
          </p>
        </div>
      ))}

    </div>

  )}

</div>




          <hr className="my-8" />


<FailureForm
  formData={formData}
  setFormData={setFormData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  editingId={editingId}
  lessonError={lessonError}
  setLessonError={setLessonError}
/>

<SearchFilterBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedMood={selectedMood}
  setSelectedMood={setSelectedMood}
  sortOption={sortOption}
  setSortOption={setSortOption}
  failures={sortedFailures}
/>

<FailureList
  failures={sortedFailures}
  handleEdit={handleEdit}
  handleDelete={handleDelete}
  fetchFailures={fetchFailures}
/>




        </div>
      </div>
    </>
  );
}

export default Home;