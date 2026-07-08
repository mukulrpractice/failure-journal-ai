import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import FailureForm from "../components/FailureForm";
import FailureList from "../components/FailureList";

function Home() {
  const [failures, setFailures] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    lesson: "",
    mood: "Neutral",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch all failures
  const fetchFailures = async () => {
    try {
      const response = await API.get("/failures");

      setFailures(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Load data on page load
 useEffect(() => {
  const loadFailures = async () => {
    await fetchFailures();
  };

  loadFailures();
}, []);
  // Handle form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (editingId) {
       response = await API.put(
  `/failures/${editingId}`,
  formData
);

        alert(response.data.message);

        setEditingId(null);
      } else {
       response = await API.post("/failures", formData);

        alert(response.data.message);
      }

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

  // Delete Failure
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this failure?"
    );

    if (!confirmDelete) return;

    try {
      const response = await API.delete(`/failures/${id}`);

      alert(response.data.message);

      fetchFailures();
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  // Edit Failure
  const handleEdit = (failure) => {
    setEditingId(failure._id);

    setFormData({
      title: failure.title,
      description: failure.description,
      lesson: failure.lesson,
      mood: failure.mood,
    });
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Failure Journal</h1>

        <p>Turn every failure into your next success.</p>

        <hr />

        <FailureForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editingId={editingId}
        />

        <FailureList
          failures={failures}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default Home;