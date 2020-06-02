const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.route('/users/')
  .get(UserController.getAll)
  .post(UserController.createUser)
  .put(UserController.changeUser)

router.route('/users/:id')
  .get(UserController.getUser)
  .delete(UserController.deleteUser)

module.exports = router;
