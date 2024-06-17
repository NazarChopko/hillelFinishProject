const express = require('express');
const bodyParser = express.urlencoded({ extended: false });
const checkIsUserLogged = require('../../middleware/checkUser/checkIsUserLogged');
const validateForm = require('../../middleware/addPost/validateForm.middleware');
const redirectMiddleware = require('../../middleware/addPost/redirect.middleware');
const { renderMyPosts, addPostController, deletePostController } = require('../../controllers/myPosts');

const myPosts = (path, router) => {
  router
    .route(`${path}`)
    .get(checkIsUserLogged, renderMyPosts)
    .post(bodyParser, checkIsUserLogged, validateForm, addPostController, redirectMiddleware);

  router.delete(`${path}/:id`, checkIsUserLogged, deletePostController);
};

module.exports = myPosts;
