const express = require("express");
const { register, login } = require("../Controller/AuthController");
const protected = require("../Middleware/ProtectedMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/dashboard", protected, async (req, res) => {

    try {
        res.status(200).json({
            success: true,
            message: "Welcome to Dashboard",
            user: req.user,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Dashboard Error",
            success: false,
        });
    };
});

module.exports = router;

