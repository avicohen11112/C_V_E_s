const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello koko");
});

app.listen(7001);
