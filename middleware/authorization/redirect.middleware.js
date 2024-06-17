const redirectErrorHandling = (title) => (err, req, res, next) =>
  res.render('auth', { data: req.body, errors: err.errors, title });

module.exports = redirectErrorHandling;
