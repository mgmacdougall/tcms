import express from "express";
import {
  sampleUserCall,
  createUser,
  getAllUsers,
} from "../controllers/UserController.js";
const router = express.Router();

// Get Test Case

router.get("/", (req, res) => {
  res.send(sampleUserCall());
});

router.get("/all", getAllUsers);
router.post("/", createUser);
export default router;
