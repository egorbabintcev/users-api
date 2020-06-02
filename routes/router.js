const { Router } = require('express');

const router = Router();

router.route('/users/')
  .get((req, res) => {res.end('Get all users')})
  .post((req, res) => {res.end('Create user')})
  .put((req, res) => {res.end('Change user data')})

router.route('/users/:id')
  .get((req, res) => {res.end('Get user by ID')})
  .delete((req, res) => {res.end('Delete user by ID')})

module.exports = router;
