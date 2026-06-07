import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tcms");
    console.log("connected to local MongoDB");
  } catch (e) {
    console.error("MongoDB connection error", e.message);
    process.exit(1);
  }
};
