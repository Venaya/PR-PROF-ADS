const router = require('express').Router();
const controller = require('../Controllers/UserController');

router.route('/').get(controller.READALL).post(controller.CREATE);
router.route('/:id').get(controller.READ).put(controller.UPDATE).delete(controller.DELETE);

module.exports = router;