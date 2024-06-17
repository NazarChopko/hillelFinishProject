const authorizationRouter = require('./authorization');
const allPostRouter = require('./allPosts');
const myPosts = require('./myPosts');
const adminRouter = require('./admin');

module.exports = rootRouter = (router) => {
  authorizationRouter('/auth', router);
  allPostRouter('/', router);
  myPosts('/posts', router);
  adminRouter('/admin', router);
  return router;
};
