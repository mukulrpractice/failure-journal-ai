import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function FailureForm({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  editingId,
  lessonError,
  setLessonError,
}) {
  const [loadingAI, setLoadingAI] = useState(false);
  


  const handleGenerateAI = async () => {
  if (!formData.title || !formData.description) {
    toast.error("Please enter title and description first.");
    return;
  }

  try {
    setLoadingAI(true);

    const response = await API.post("/ai/analyze", {
      title: formData.title,
      description: formData.description,
      mood: formData.mood,
    });

    setFormData((prev) => ({
      ...prev,
      lesson: response.data.lesson,
      actionPlan: response.data.actionPlan,
    }));

    toast.success("AI suggestions generated successfully!");

  } catch (error) {
    console.error(error);
    toast.error("AI generation failed.");
  } finally {
    setLoadingAI(false);
  }
};


  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">
        {editingId ? "Update Failure" : "Add New Failure"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block font-semibold mb-2">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Failure title..."
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-xl p-3"
          />
        </div>

       {/* Lesson */}
<div>
  <label className="block font-semibold mb-2">
    Lesson Learned
  </label>

  <textarea
    name="lesson"
    value={formData.lesson}
    onChange={(e) => {
      handleChange(e);

      if (e.target.value.trim()) {
        setLessonError("");
      }
    }}
    onBlur={() => {
      if (!formData.lesson.trim()) {
        setLessonError(
          "Every failure teaches something. Please write at least one lesson learned."
        );
      }
    }}
    rows="3"
    className={`w-full rounded-xl p-3 border transition ${
      lessonError
        ? "border-yellow-400 bg-yellow-50"
        : "border-slate-300"
    }`}
  />

  {lessonError && (
    <div className="mt-2 rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
      <span className="font-semibold">💡 Lesson Required</span>
      <p className="mt-1">
        Every failure teaches something. Please write at least one lesson learned.
      </p>
    </div>
  )}
</div>

        {/* Mood */}
        <div>
          <label className="block font-semibold mb-2">
            Mood
          </label>

          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Sad</option>
            <option>Neutral</option>
            <option>Motivated</option>
          </select>
        </div>

        <hr />

        <h3 className="text-xl font-bold text-blue-700">
          🌱 Growth Plan
        </h3>

        {/* Action Plan */}
        <div>
          <label className="block font-semibold mb-2">
            Action Plan
          </label>

          <textarea
            name="actionPlan"
            value={formData.actionPlan}
            onChange={handleChange}
            rows="3"
            placeholder="What will you do differently?"
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Target Date */}
        <div>
          <label className="block font-semibold mb-2">
            Target Date
          </label>

          <input
            type="date"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Reminder */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="reminderEnabled"
            checked={formData.reminderEnabled}
            onChange={handleChange}
          />

          <label className="font-semibold">
            Enable Reminder
          </label>
        </div>

        {/* Reminder Frequency */}
        <div>
          <label className="block font-semibold mb-2">
            Reminder Frequency
          </label>

          <select
            name="reminderFrequency"
            value={formData.reminderFrequency}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Daily</option>
            <option>Every 3 Days</option>
            <option>Weekly</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block font-semibold mb-2">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>New</option>
            <option>Working</option>
            <option>Improved</option>
            <option>Mastered</option>
          </select>
        </div>

        {/* Progress */}
        <div>
          <label className="block font-semibold mb-2">
            Progress ({formData.progress}%)
          </label>

          <input
            type="range"
            min="0"
            max="100"
            step="5"
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Success Story */}
        {formData.status === "Mastered" && (
          <div>
            <label className="block font-semibold mb-2">
              Success Story
            </label>

            <textarea
              name="successStory"
              value={formData.successStory}
              onChange={handleChange}
              rows="4"
              placeholder="Share how you overcame this failure..."
              className="w-full border rounded-xl p-3"
            />
          </div>
        )}

        {/*ai generate button*/}
       <button
                     type="button"
                    onClick={handleGenerateAI}
                    disabled={loadingAI}
                      className="w-full mb-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white py-3 rounded-xl font-bold transition"
                     >
                     {loadingAI
                    ? "Generating AI Suggestions..."
                    : "✨ Generate with AI"}
        </button>
    


        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition"
        >
          {editingId
            ? "Update Failure"
            : "Save Failure"}
        </button>

      </form>
    </div>
  );
}

export default FailureForm;