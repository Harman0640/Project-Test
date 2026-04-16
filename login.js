// login.js

const express = require('express');
const router = express.Router();

// Dummy user data (for testing)
const USER = {
    username: "admin",
    password: "1234"
};

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check credentials
    if (username === USER.username && password === USER.password) {
        res.status(200).json({
            message: "Login successful ✅"
        });
    } else {
        res.status(401).json({
            message: "Invalid username or password ❌"
        });
    }
});

module.exports = router;