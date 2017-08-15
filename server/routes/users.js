var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersCtrl.getAll)
router.post('/login', usersCtrl.login);
router.post('/register', usersCtrl.register);

module.exports = router;
