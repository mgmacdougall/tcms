import express from "express";
import {
  sampleController,
  createTestCase,
  getTestCases,
} from "../controllers/TestCaseController.js";

const router = express.Router();

// Get Test Case
router.get("/", (req, res) => {
  res.send(sampleController());
});

router.get("/all", getTestCases);
router.post("/", createTestCase);
export default router;
