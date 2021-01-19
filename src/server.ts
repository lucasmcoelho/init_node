import express from "express";
/* chamada serviço */
// import httpProxy from "express-http-proxy";
/* Conection com o banco de dados */
// import "./database/conection";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
/* chamada serviço */
// app.use("/user", httpProxy("http://localhost:3001", { timeout: 3000 }));

app.get("/", (req, res, next) => {
  res.json({ message: "LOGIN -> olá server está online" });
});
app.listen(3001, () => {
  console.clear();
  console.log("           |-----------|  INIT_NODE  |------------|");
  console.log("           | INIT_NODE rodando na 🚪 porta 3001  |");
  console.log("           |-----------|  INIT_NODE  |------------|");
});
