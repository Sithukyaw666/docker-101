const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const path = require("path");
const app = express();
const cors = require("cors");
const route = require("./routes/index");
const PORT = process.env.PORT || 5000;

const URI = "mongodb://mongo:27017/docker-101";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to DB")
);

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
route(router);
app.get("/", (req, res) => {
  res.sendFile(path.join("index.html"));
});
app.use("/api", router);

app.listen(PORT, () => console.log("server is up "));
