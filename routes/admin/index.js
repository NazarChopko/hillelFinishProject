const checkIsUserLogged = require('../../middleware/checkUser/checkIsUserLogged');
const { getAllUsersController, deleteUserController } = require('../../controllers/admin');

const adminRouter = async (path, router) => {
  router.route(`${path}`).get(checkIsUserLogged, getAllUsersController);

  router.delete(`${path}/:id`, deleteUserController);
};

module.exports = adminRouter;
