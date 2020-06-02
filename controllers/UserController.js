class UserController {
  static async getAll(req, res) {
    res.end('Get all users');
  }

  static async getUser(req, res) {
    res.end('Get user by ID');
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
