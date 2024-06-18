const { Forbidden } = require('../../errors/error-exception');

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof Forbidden) {
    return res.render('404', { message: err.message });
  }
  res.render('404');
};

module.exports = errorMiddleware;
