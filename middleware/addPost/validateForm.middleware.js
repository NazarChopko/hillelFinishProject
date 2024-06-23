const combineErrors = require('../../helpers/combineErrors');
const addPostSchema = require('../../helpers/addPostSchema');
const { ValidateError } = require('../../errors/error-exception');
const { getPostsByUserId } = require('../../services/myPosts.service');

const validatePostMiddleware = async (req, res, next) => {
  try {
    const { userId } = req.__pageContext;
    const posts = await getPostsByUserId(userId);
    req.body.posts = posts;
    await addPostSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = combineErrors(error);
    next(new ValidateError({ errors }));
  }
};

module.exports = validatePostMiddleware;
