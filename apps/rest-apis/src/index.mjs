import express from "express";

const app = express();

app.get("/api", (req, res) => {
  return res.json({ message: "sample" });
});

app.listen(3333, () => {
  console.log("server started");
});
