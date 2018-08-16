const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Test post route
// @access  Public
router.get('/test', (rerq, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
