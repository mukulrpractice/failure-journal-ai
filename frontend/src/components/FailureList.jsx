import FailureCard from "./FailureCard";

function FailureList({
  failures,
  handleEdit,
  handleDelete,
}) {
  return (
    <>
      <h2>All Failures</h2>

      {failures.length === 0 ? (
        <p>No failures added yet.</p>
      ) : (
        failures.map((failure) => (
          <FailureCard
            key={failure._id}
            failure={failure}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      )}
    </>
  );
}

export default FailureList;