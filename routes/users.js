const express = require('express');
const { getUsers, deleteUser } = require('../controllers/users');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);
router.use(authorize('Admin'));

router.get('/', getUsers);
router.delete('/:id', deleteUser);

module.exports = router;
