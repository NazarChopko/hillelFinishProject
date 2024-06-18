const { Forbidden } = require('../../errors/error-exception');

const privateRouteMiddleware = (req, res, next) => {
  const isTokenExist = req.cookies['token'];
  const role = req.cookies['role'];
  req.token = isTokenExist;
  req.role = role;
  if (!isTokenExist) {
    return next(new Forbidden({ msg: 'Forbidden! You are not logged in!' }));
  }
  next();
};

module.exports = privateRouteMiddleware;
