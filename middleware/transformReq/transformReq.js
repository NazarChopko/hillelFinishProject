const checkIsUserLoggedAndSetHeaders = (req, res, next) => {
  const isTokenExist = req.cookies['token'];
  const role = req.cookies['role'];
  req.token = isTokenExist;
  req.role = role;
  next();
};

module.exports = checkIsUserLoggedAndSetHeaders;
