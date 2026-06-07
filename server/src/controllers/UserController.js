import User from "../models/UserSchema.js";

/**
 * 
 * @returns 
 * {
  "name": "Michael Thompson",
  "email": "michael@example.com",
  "password": "SuperSecurePassword123!",
  "role": "user",
  "avatar": "https://example.com/avatars/michael.png",
  "isActive": true
}

 * 
 */

export const sampleUserCall = () => {
  return { message: "ok" };
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (e) {
    req.status(500).json({ message: e.message });
  }
};

export const createUser = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("TYPE:", typeof req.body);

    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
