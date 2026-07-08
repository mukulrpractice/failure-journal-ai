require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

const failureRoutes = require("./routes/failureRoutes");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/failures", failureRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Failure Journal Backend");
});

app.listen(PORT, () => {
  console.clear();

  console.log("🚀 ===================================");
  console.log("    FAILURE JOURNAL BACKEND");
  console.log("======================================");
  console.log(`📍 Local Server : http://localhost:${PORT}`);
  console.log("======================================");
});