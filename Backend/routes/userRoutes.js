const express = require('express');
const userController = require('../controllers/userControllers');
// const { userController, addUser } = require("../controllers/userControllers");

const router = express.Router();

// Define routes
router.get('/', userController.getuser);

router.post('/add', userController.adduser);

module.exports = router;