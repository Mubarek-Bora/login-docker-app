const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/logindb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User model
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
  })
);

// ✅ Register Route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.json({ message: "User already exists" });

  await User.create({ email, password });
  res.json({ message: "User registered" });
});

// ✅ Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password); // 👈 add this

  const user = await User.findOne({ email, password });
  console.log("Found user:", user); // 👈 add this

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});
  

// Start server
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
