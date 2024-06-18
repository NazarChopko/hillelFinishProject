class ValidateError extends Error {
  constructor({ msg = 'Validation failed', errors = {} }) {
    super(msg);

    this.status = 400;
    this.errors = errors;
  }
}

class NotFound extends Error {
  constructor({ msg = 'Not Found', errors = {} }) {
    super(msg);

    this.status = 404;
    this.errors = errors;
  }
}

class SeverError extends Error {
  constructor({ msg = 'Internal server error' }) {
    super(msg);

    this.status = 500;
  }
}

class BadRequest extends Error {
  constructor({ msg = 'Bad request' }) {
    super(msg);

    this.status = 400;
  }
}

class Forbidden extends Error {
  constructor({ msg = 'Forbidden', errors = {} }) {
    super(msg);

    this.status = 403;
    this.errors = errors;
  }
}

module.exports = { NotFound, ValidateError, SeverError, BadRequest, Forbidden };
