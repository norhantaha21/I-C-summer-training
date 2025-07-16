const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');

router.get('/', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;