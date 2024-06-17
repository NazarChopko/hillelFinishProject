const { Forbidden, BadRequest } = require('../../errors/error-exception');
const { addCommentByUserId } = require('../../services/myPosts.service');

const addNewComment = async (req, res) => {
  try {
    const token = req.token;
    const { postId, text } = req.body;
    if (!token) {
      throw new Forbidden({ msg: 'Forbidden! You are not Logged in!' });
    }
    if (!text) {
      throw new BadRequest({ msg: 'Comment cant be empty!' });
    }
    await addCommentByUserId(text, postId, token);
    res.redirect('/api/posts');
  } catch (error) {
    console.log(error);
    res.status(error?.status || 500).json({ message: error?.message || 'Internal server error!' });
  }
};

module.exports = { addNewComment };
