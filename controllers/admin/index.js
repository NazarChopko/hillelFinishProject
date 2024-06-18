const { getAllUsers, deleteUser } = require('../../services/admin.service');

const getAllUsersController = async (req, res) => {
  try {
    const isUserLogged = req.token;
    const role = req.role;

    if (role === 'false' || !isUserLogged) {
      res.redirect('/api/');
    }
    const users = await getAllUsers();
    res.render('admin', { isUserLogged: !!isUserLogged, users });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error!' });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    await deleteUser(userId);
    res.status(200).json({ message: 'User has been deleted!' });
  } catch (error) {
    res.status(500).json({ messgae: 'Internal server error!' });
  }
};

module.exports = { getAllUsersController, deleteUserController };
