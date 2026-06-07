import mongoose from "mongoose";
const TestRunSchema = new mongoose.Schema(
  {
    testCase: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TestCase",
      required: true,
    },
    executedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    result: {
      type: String,
      enum: ["Passed", "Failed", "Blocked", "Not Executed"],
      default: "Not Executed",
    },

    actualResult: String,
    executionTime: Number, // seconds
  },
  { timestamps: true },
);

export default mongoose.model("TestRun", TestRunSchema);
