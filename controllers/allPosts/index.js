const { getAllPosts } = require('../../services/posts.service');

const renderAllPosts = async (req, res) => {
  try {
    const { role = false, isUserLogged = false, userId = null } = req.__pageContext;
    const posts = await getAllPosts();
    res.render('allPosts', {
      isUserLogged,
      posts: posts || [],
      moment: require('moment'),
      role
    });
  } catch (error) {}
};

module.exports = { renderAllPosts };
