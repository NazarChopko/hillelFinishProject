const { Forbidden } = require('../../errors/error-exception');

const redirectMiddleware = (err, req, res, next) => {
  // if(err instanceof Forbidden){
  //     return res
  // }
  const isUserLogged = req.token;
  res.render('myPosts', {
    data: req.body,
    errors: err.errors,
    isUserLogged,
    posts: req.body.posts || []
  });
};

module.exports = redirectMiddleware;
