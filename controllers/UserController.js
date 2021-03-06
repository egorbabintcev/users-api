const User = require('../models/User');

class UserController {
  static async getAll(req, res) {
    res.send(await User.getAll());
  }

  static async getUser(req, res) {
    res.send(await User.getUser(req.params.id));
  }

  static async createUser(req, res) {
    res.end('Create user');
  }

  static async deleteUser(req, res) {
    res.end('Delete user by ID');
  }

  static async changeUser(req, res) {
    res.end('Change user by ID');
  }
}

module.exports = UserController;
