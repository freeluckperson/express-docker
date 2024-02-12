import express from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes.js";
import mongoose from "mongoose";
import { URL_DB } from "../config.js";

const app = express();

// main().catch((error) => console.log(error));
// async function main() {
//   mongoose
//     .connect("mongodb+srv://freeluck:person@cluster0.d1m2pwg.mongodb.net/")
//     .then(console.log("→ DB connected"));
// }

//DB conection
mongoose
  .connect(URL_DB)
  .then(console.log("→ DB connected"))
  .catch((error) => console.log(error.message));

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use(tasksRoutes);

app.listen(3000, () => console.log("→ Server in port 3000"));
