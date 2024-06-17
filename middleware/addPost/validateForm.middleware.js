const combineErrors = require('../../helpers/combineErrors');
const addPostSchema = require('../../helpers/addPostSchema');
const { ValidateError } = require('../../errors/error-exception');
const prisma = require('../../prismaClient');

const validatePostMiddleware = async (req, res, next) => {
  try {
    const userId = Number(req.token);
    const posts = await prisma.post.findMany({ where: { user: { id: userId } } });
    req.body.posts = posts;
    await addPostSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = combineErrors(error);
    next(new ValidateError({ errors }));
  }
};

module.exports = validatePostMiddleware;
