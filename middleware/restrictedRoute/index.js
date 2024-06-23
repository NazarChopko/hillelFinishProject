const restrictedRoute = (req, res, next) => {
  if (req.session?.context?.userId) {
    next();
  } else {
    res.redirect(req.baseUrl);
  }
};

module.exports = restrictedRoute;
