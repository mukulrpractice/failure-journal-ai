function FailureForm({
  formData,
  handleChange,
  handleSubmit,
  editingId,
}) {
  return (
    <>
      <h2>Add New Failure</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="lesson"
          placeholder="Lesson Learned"
          value={formData.lesson}
          onChange={handleChange}
        />

        <br />
        <br />

        <select
          name="mood"
          value={formData.mood}
          onChange={handleChange}
        >
          <option>Sad</option>
          <option>Neutral</option>
          <option>Motivated</option>
        </select>

        <br />
        <br />

        <button type="submit">
          {editingId ? "Update Failure" : "Save Failure"}
        </button>
      </form>

      <hr />
    </>
  );
}

export default FailureForm;