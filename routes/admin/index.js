const { getAllUsersController, deleteUserController } = require('../../controllers/admin');
const render404page = require('../../middleware/render404page/render404page');
const { setPageContext } = require('../../middleware/authContext');
const restrictedRoute = require('../../middleware/restrictedRoute');

const adminRouter = async (path, router) => {
  router.route(`${path}`).get(restrictedRoute, setPageContext, getAllUsersController, render404page);

  router.delete(`${path}/:id`, restrictedRoute, deleteUserController);
};

module.exports = adminRouter;
