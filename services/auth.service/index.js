const prisma = require('../../prismaClient');

const createNewUser = async ({ email, password, role }) => {
  const createdUser = await prisma.user.create({ data: { email, password, role } });
  return createdUser;
};

const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};
module.exports = { createNewUser, findUserByEmail };
