import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import errorController from "./middlewares/error-controller.js";
import dbConnect from "./db/connect.js";
import userRouter from "./routes/user-routes.js";
dotenv.config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
        credentials: true
    }
));
app.use(cookieParser());


dbConnect();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/user", userRouter);

app.use(errorController);
app.listen(process.env.PORT || 5000, () => console.log("Server running...on port : " + process.env.PORT || 5000));
