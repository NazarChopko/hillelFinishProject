const prisma = require('../../prismaClient');

const getAllUsers = async () => {
  const usersList = await prisma.user.findMany();
  return usersList;
};

const deleteUser = async (id) => {
  const deleteComments = prisma.comments.deleteMany({ where: { authorId: id } });
  const deletePosts = prisma.post.deleteMany({ where: { userId: id } });
  const deleteUser = prisma.user.delete({ where: { id } });

  await prisma.$transaction([deleteComments, deletePosts, deleteUser]);
};

module.exports = { getAllUsers, deleteUser };
