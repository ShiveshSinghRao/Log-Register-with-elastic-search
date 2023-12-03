import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import getAllLogs from "./routes/logs.js";

import bodyParser from "body-parser";
import "express-async-errors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api", getAllLogs);

app.listen(3000, () => {
  console.log("Connected to backend.");
});
