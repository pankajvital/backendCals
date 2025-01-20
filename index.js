const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Import routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  console.log("Base /api endpoint hit");
  res.send("Welcome to the API!");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Server configuration
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect("mongodb+srv://tejkumar29aug:Tej.Kumar123%40@cluster0.sv7jn.mongodb.net/movemystuff")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
