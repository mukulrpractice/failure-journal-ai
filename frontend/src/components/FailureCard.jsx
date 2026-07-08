function FailureCard({
  failure,
  handleEdit,
  handleDelete,
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "15px",
        borderRadius: "10px",
      }}
    >
      <h3>{failure.title}</h3>

      <p>{failure.description}</p>

      <p>
        <strong>Lesson:</strong> {failure.lesson}
      </p>

      <p>
        <strong>Mood:</strong> {failure.mood}
      </p>

      <br />

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => handleEdit(failure)}
          style={{ marginRight: "10px" }}
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(failure._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FailureCard;