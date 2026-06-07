import TestRun from "../models/TestRunSchema.js";

export const getAllRuns = async (req, res) => {
  try {
    const result = await TestRun.find();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createRunResult = async (req, res) => {
  try {
    const result = await TestRun.create(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
