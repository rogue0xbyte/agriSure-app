const express = require('express');
const { addLand, getLands } = require('../controllers/landController');

const router = express.Router();

router.post('/add', addLand);
router.get('/', getLands);

module.exports = router;
