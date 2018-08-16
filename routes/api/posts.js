const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
// @desc    Test post route
// @access  Public
router.get('/test', (rerq, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
