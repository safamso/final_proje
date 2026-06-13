import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//MongoDB//
import { connectDB } from "./config/db.js";
//Routes//
import productRoutes from "./routes/product.routes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);


connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
