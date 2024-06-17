const redirectMiddleware = (err, req, res, next) => {
  const isUserLogged = req.token;
  res.render('myPosts', {
    data: req.body,
    errors: err.errors,
    isUserLogged,
    posts: req.body.posts || []
  });
};

module.exports = redirectMiddleware;
