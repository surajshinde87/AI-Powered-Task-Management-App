import express from 'express'
import dotenv from "dotenv"
import cors from  'cors'
import connectDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
connectDB()

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req , res)=>{
    res.send("You Did It")
})
// Routes
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))