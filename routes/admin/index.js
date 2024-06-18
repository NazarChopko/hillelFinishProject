const privateRoute = require('../../middleware/privateRoute/privateRoute.middleware');
const { getAllUsersController, deleteUserController } = require('../../controllers/admin');
const render404page = require('../../middleware/render404page/render404page');

const adminRouter = async (path, router) => {
  router.route(`${path}`).get(privateRoute, getAllUsersController, render404page);

  router.delete(`${path}/:id`, deleteUserController);
};

module.exports = adminRouter;
