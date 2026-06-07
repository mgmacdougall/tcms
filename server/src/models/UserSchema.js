import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    role: {
      type: String,
      enum: ["Tester", "Admin", "Manager"],
      default: "Tester",
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);
