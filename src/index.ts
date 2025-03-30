import dotenv from "dotenv";
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import treatmentRoutes from "./routes/treatment";
import userRoutes from './routes/user'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json())
app.use(userRoutes)
app.use(treatmentRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});










