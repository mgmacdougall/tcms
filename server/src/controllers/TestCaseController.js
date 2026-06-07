import Test from "supertest/lib/test.js";
import TestCase from "../models/TestCaseSchema.js";

export const sampleController = () => {
  const mockData = {
    testcases: [
      { id: 1, name: "foo", desc: "Lorem ipsum" },
      { id: 2, name: "foo", desc: "Lorem ipsum" },
      { id: 3, name: "foo", desc: "Lorem ipsum" },
    ],
  };
  return mockData;
};

export const getTestCases = async (req, res) => {
  try {
    const result = await TestCase.find();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createTestCase = async (req, res) => {
  // console.log("fff", body);
  try {
    const { body } = req;
    const testcase = await TestCase.create(body);
    res.status(201).json(testcase);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
  // return "here";
};
