import express from "express";
import cors from 'cors';
import {config} from "dotenv";
import { Router } from "./routes/complaints.routes.js";


config()
const app = express();
app.use(cors());
app.use(express.json());

// middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});


app.use("/api", Router)







// listen
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});