const prisma = require('../../prismaClient');

const getPostsByUserId = async (id) => {
  const myPosts = await prisma.post.findMany({
    where: { user: { id: id } },
    include: { comments: { include: { author: { select: { email: true, id: true } } }, orderBy: { id: 'asc' } } },
    orderBy: { id: 'desc' }
  });
  return myPosts;
};

const addPostByUserId = async (id, post) => {
  await prisma.post.create({ data: { text: post.text, title: post.title, userId: id } });
};

const deletePostByUserId = async (id) => {
  const deletComments = prisma.comments.deleteMany({
    where: { postId: id }
  });
  const deletePost = prisma.post.delete({
    where: { id: id }
  });

  await prisma.$transaction([deletComments, deletePost]);
};

const addCommentByUserId = async (text, postId, userId) => {
  await prisma.comments.create({ data: { text, postId: Number(postId), authorId: Number(userId) } });
};
module.exports = { getPostsByUserId, addPostByUserId, deletePostByUserId, addCommentByUserId };
