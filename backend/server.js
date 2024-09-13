import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
const port = 4000;
// const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB Connection
connectDB();

//api endpoints
// app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://veluriyuvrajreddy:X1lN2d7JsyOO4Mhk@cluster0.wftmb.mongodb.net/?
