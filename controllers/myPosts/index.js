const { Forbidden } = require('../../errors/error-exception');
const { getPostsByUserId, addPostByUserId, deletePostByUserId } = require('../../services/myPosts.service');

const renderMyPosts = async (req, res) => {
  try {
    const { userId, isUserLogged, role } = req.__pageContext;

    const posts = await getPostsByUserId(userId);
    res.render('myPosts', {
      isUserLogged,
      role,
      posts,
      moment: require('moment')
    });
  } catch (error) {
    res.status(404);
  }
};

const addPostController = async (req, res) => {
  try {
    const { userId } = req.__pageContext;
    if (!userId) {
      res.redirect('/api/auth/signin');
    }
    await addPostByUserId(userId, req.body);
    res.redirect('/api/posts');
  } catch (error) {
    res.status(500).json({ message: 'Internal server error!' });
  }
};

const deletePostController = async (req, res) => {
  try {
    const { userId } = req.__pageContext;

    if (!userId) {
      throw new Forbidden({ msg: 'You are not loggen in!' });
    }
    const postId = Number(req.params.id);

    await deletePostByUserId(postId);

    res.status(200).json({ message: 'Post has been deleted!' });
  } catch (error) {
    if (error instanceof Forbidden) {
      res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { renderMyPosts, addPostController, deletePostController };
