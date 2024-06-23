const express = require('express');
const bodyParser = express.urlencoded({ extended: false });
const { renderAllPosts } = require('../../controllers/allPosts');
const { addNewComment } = require('../../controllers/comments');
const { setPageContext } = require('../../middleware/authContext');

const allPosts = (path, router) => {
  router.route(`${path}`).get(setPageContext, renderAllPosts).post(bodyParser, setPageContext, addNewComment);
};

module.exports = allPosts;
