import Project from "../models/ProjectSchema.js";

export const createProject = async (req, res) => {
  try {
    const result = await Project.create(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const result = await Project.find();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
