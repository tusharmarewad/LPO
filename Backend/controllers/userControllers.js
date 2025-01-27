const { PolarAreaController } = require("chart.js");
const userModel = require("../models/userModels");
const pool = require("../config/db");

exports.getuser = async (req, res) => {
  try {
    const users = await userModel.getuser();
    res.status(200).json({ success: true, data: users });
    console.log(users);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.adduser = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, password) are required.",
    });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO users (name,password,role) VALUES (?,?,1)",
      [name, password]
    );

    res.status(201).json({
      success: true,
      message: "User added successfully",
      userId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding user",
      error: error.message,
    });
  }
};
