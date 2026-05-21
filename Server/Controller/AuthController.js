const express = require("express");
const router = express.Router();
const userModel = require("../model/user");
const bcrypt = require("bcrypt");

// Register 

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Something Went Wrong",
            });
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
        })
        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = { register };