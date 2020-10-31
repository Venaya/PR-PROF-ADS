const router = require('express').Router();
const controller = require('../Controllers/LoginController');

router.route('/login').post();
router.route('/logout').post();

module.exports = router;