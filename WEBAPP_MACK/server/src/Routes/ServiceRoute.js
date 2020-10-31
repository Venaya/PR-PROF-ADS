const router = require('express').Router();
const controller = require('../Controllers/ServiceController');

router.route('/').get(controller.READALLAUTHORIZED).post(controller.CREATE);
router.route('/admin').get(controller.READALL);
router.route('/user/:id').get(controller.READ).put(controller.UPDATE).delete(controller.DELETE);

module.exports = router;