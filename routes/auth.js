const router = require('express').Router();

router.post('/register', (req, res) => {
  console.log('Registering user');
  res.send('Register');
});

router.post('/login');

module.exports = router;
