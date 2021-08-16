const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(path.join("index.html"));
});
app.get("/api", (req, res) => {
  res.json({
    user: "James Bond",
  });
});
app.listen(PORT, () => console.log("server is up "));
