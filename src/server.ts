import express from "express";
// import "./database/conection";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());


app.get("/", (req, res, next) => {
  res.json({ message: "Port 3889 for Android -> Test SUCCESS" });
});
app.listen(3889, () => {
  console.clear();
  console.log("           |-----------|  INIT_NODE  |------------|");
  console.log("           | INIT_NODE rodando na 🚪 3889  |");
  console.log("           |-----------|  INIT_NODE  |------------|");
});
