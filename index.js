const express = require("express");
const bodyParser = require("body-parser");
const projects = require("./routes/projectManagement");
const cors = require("cors");
var app = express();
app.use(bodyParser.json());
var moongose = require("mongoose");
const DB_URL = require("./properties").DB_URL;

moongose.connect(DB_URL);
moongose.connection.on("connected", () => {
  console.log("Connected with MongoDB");
});


app.use(cors({
    origin: '*'
}));
app.get("/", (req, res) => {
  res.send("Project Management API");
});

app.use("/projects", projects);

app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(4000);
console.log("Server started with port 4000");
