import express from "express";
import dotenv from "dotenv";
dotenv.config();



import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use(express.json());  // to parse incoming req with json payload  from (req.body)
app.use("/api/auth", authRoutes);

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
