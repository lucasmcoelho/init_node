import express from "express";
import "./database/conection";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "LOGIN -> olá server está online" });
});
app.listen(3001);
