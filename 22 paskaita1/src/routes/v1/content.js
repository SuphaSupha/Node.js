const express = require('express');

const router = express.Router();

const { isLoggedIn } = require('../../mid');

router.get('/', isLoggedIn, (req, res) => {
  res.send({ data: ['Harry Potter'] });
});

module.exports = router;
