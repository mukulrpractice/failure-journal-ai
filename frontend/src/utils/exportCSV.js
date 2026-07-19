import Papa from "papaparse";

export function exportFailuresToCSV(failures) {
  if (failures.length === 0) {
    alert("No data available to export.");
    return;
  }

  const csvData = failures.map((item) => ({
    Title: item.title,
    Description: item.description,
    Lesson: item.lesson,
    Mood: item.mood,
  }));

  const csv = Papa.unparse(csvData);

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "failure-journal.csv";

  link.click();

  URL.revokeObjectURL(url);
}