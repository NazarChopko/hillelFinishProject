const express = require('express');
const bodyParser = express.urlencoded({ extended: false });
const checkIsUserLogged = require('../../middleware/checkUser/checkIsUserLogged');
const { renderAllPosts } = require('../../controllers/allPosts');
const { addNewComment } = require('../../controllers/comments');

const allPosts = (path, router) => {
  router.route(`${path}`).get(checkIsUserLogged, renderAllPosts).post(bodyParser, checkIsUserLogged, addNewComment);
};

module.exports = allPosts;
