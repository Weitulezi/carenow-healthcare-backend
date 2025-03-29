import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import treatmentRoutes from "./routes/treatmentRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(treatmentRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});










