var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.get("/api/v1/fixture/:id", (req, res) => {
  console.log("getting fixture");
});

console.log("Fixture Database API server started on: " + port);
