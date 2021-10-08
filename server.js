//require("dotenv").config();
const express = require("express");
const app = express();

const TENANT = process.env.TENANT;

app.get("/", (req, res) => {
  res.send(`OK from ${TENANT}`);
});

app.get("/:id", (req, res) => {
  let { id } = req.params;
  res.send(`Tenant ${TENANT}: ID: ${id}`);
});

app.listen(3000, () => {
  console.log("listening, tenant: ", TENANT);
});
