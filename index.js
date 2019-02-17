const express = require("express");
const app = express();

//router handler
app.get("/", (req, res) => {
  res.send({ hi: "hello world" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
