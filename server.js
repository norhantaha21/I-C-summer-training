import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
connectDB();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/categories", categoryRoutes);

// Route للـ home
app.get("/", (req, res) => {
  res.send("🚀 Service Category API is running. Use /api/categories");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));