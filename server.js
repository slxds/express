const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/:id", (req, res) => {
  let { id } = req.params;
  res.send(`ID: ${id}`);
});

app.listen(3000, () => {
  console.log("listening");
});
