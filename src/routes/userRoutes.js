const express = require('express');
const router = express.Router();
const { listUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/userController');

router.get('/users', listUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;