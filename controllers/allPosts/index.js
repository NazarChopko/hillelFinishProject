const { getAllPosts } = require('../../services/posts.service');

const renderAllPosts = async (req, res, next) => {
  try {
    const posts = await getAllPosts();
    const isUserLogged = Number(req.token);
    res.render('allPosts', {
      isUserLogged,
      posts: posts || [],
      moment: require('moment')
    });
  } catch (error) {}
};

module.exports = { renderAllPosts };
