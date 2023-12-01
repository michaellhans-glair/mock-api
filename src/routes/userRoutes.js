// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, deleteUser } = require('../controllers/userController.js');

router.get('/users', getUsers);
router.delete('/users', deleteUser);

module.exports = router;
