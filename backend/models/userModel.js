import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    eid: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    highestQualification: { type: String, required: true },
    experience: { type: String, required: true },
    expertise: { type: [String], required: true },
    researchProfileLinks: { type: [String] },
    image: { type: String, required: true },
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
