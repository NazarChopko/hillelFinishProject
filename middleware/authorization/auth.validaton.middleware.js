const authSchema = require('../../helpers/authSchema');
const { ValidateError } = require('../../errors/error-exception');
const combineErrors = require('../../helpers/combineErrors');

const authValidator = async (req, res, next) => {
  try {
    await authSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = combineErrors(errors);

    next(new ValidateError({ errors }));
  }
};

module.exports = authValidator;
