import express from "express";
import {
  getAllRuns,
  createRunResult,
} from "../controllers/TestCaseRunController.js";

const router = express.Router();

router.get("/", getAllRuns);
router.post("/", createRunResult);

export default router;
