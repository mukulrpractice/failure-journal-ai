import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Home() {
  const [failures, setFailures] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    lesson: "",
    mood: "Neutral",
  });

  // ================= FETCH ALL FAILURES =================
  const fetchFailures = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/failures"
      );

      setFailures(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ================= LOAD DATA =================
 useEffect(() => {
  const loadFailures = async () => {
    await fetchFailures();
  };

  loadFailures();
}, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SAVE FAILURE =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/failures",
        formData
      );

      alert(response.data.message);

      fetchFailures();

      setFormData({
        title: "",
        description: "",
        lesson: "",
        mood: "Neutral",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  // ================= DELETE FAILURE =================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this failure?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/failures/${id}`
      );

      alert(response.data.message);

      fetchFailures();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Failure Journal</h1>

        <p>Turn every failure into your next success.</p>

        <hr />

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

          <button type="submit">Save Failure</button>
        </form>

        <hr />

        <h2>All Failures</h2>

        {failures.length === 0 ? (
          <p>No failures added yet.</p>
        ) : (
          failures.map((failure) => (
            <div
              key={failure._id}
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

              <button
                onClick={() => handleDelete(failure._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;