const redirectMiddleware = (err, req, res, next) => {
  const { isUserLogged } = req.__pageContext;

  res.render('myPosts', {
    data: req.body,
    errors: err.errors,
    isUserLogged,
    posts: req.body.posts || [],
    moment: require('moment')
  });
};

module.exports = redirectMiddleware;
