import mongoose from "mongoose";

const TestCaseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,

    preconditions: String,
    steps: [
      {
        stepNumber: Number,
        action: String,
        expectedResult: String,
      },
    ],

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Draft", "Ready", "Deprecated"],
      default: "Draft",
    },

    // Relationships
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },

    // Versioning
    version: { type: Number, default: 1 },

    // Tags
    tags: [String],
  },
  { timestamps: true },
);

export default mongoose.model("TestCase", TestCaseSchema);
