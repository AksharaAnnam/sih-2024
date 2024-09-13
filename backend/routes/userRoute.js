import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import multer from "multer";

const userRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

userRouter.post("/register", upload.single("image"), registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
