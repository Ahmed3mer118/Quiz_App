const express = require("express");
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// connect to db
mongoose
  .connect("mongodb://localhost:27017/Front-end-24-6-online")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
});

// Define Model
const Student = mongoose.model("Student", studentSchema);

// Define GET endpoint for /data
app.get("/data", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students); // Return students directly, not as an object { students }
  } catch (error) {
    console.error("Error fetching students", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
