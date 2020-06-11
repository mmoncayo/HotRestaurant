// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)
// =============================================================
const currentReservations = [];
const waitingList = [];

// Routes
// =============================================================

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req,res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/makereservations", (req,res) => {
  res.sendFile(path.join(__dirname, "makereservations.html"));
});


// API

app.get("/api/tables", (req,res) => {
  return res.json({"currentReservations": currentReservations, "waitingList": waitingList});
});

app.post("/api/makereservation", (req,res) => {
  return "yay!";
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
