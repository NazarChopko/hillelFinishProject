const prisma = require('../../prismaClient');

const getAllPosts = async () => {
  const posts = prisma.post.findMany({
    include: { comments: { include: { author: { select: { email: true, id: true } } }, orderBy: { id: 'asc' } } },
    orderBy: { id: 'desc' }
  });
  return posts;
};

module.exports = { getAllPosts };
