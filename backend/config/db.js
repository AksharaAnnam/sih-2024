import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://veluriyuvrajreddy:X1lN2d7JsyOO4Mhk@cluster0.wftmb.mongodb.net/faculty-management"
    )
    .then(() => console.log("DB Connected"));
};
