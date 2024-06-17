const checkIsUserLogged = (req, res, next) => {
  try {
    const isTokenExist = req.cookies['token'];
    const role = req.cookies['role'];
    req.token = isTokenExist;
    req.role = role;
    next();
  } catch (error) {
    res.status(error.status || 403).json({ message: error.message });
  }
};

module.exports = checkIsUserLogged;
