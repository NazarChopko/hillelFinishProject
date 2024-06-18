const express = require('express');
const bodyParser = express.urlencoded({ extended: false });
const privateRoute = require('../../middleware/privateRoute/privateRoute.middleware');
const validateForm = require('../../middleware/addPost/validateForm.middleware');
const redirectMiddleware = require('../../middleware/addPost/redirect.middleware');
const render404page = require('../../middleware/render404page/render404page');
const { renderMyPosts, addPostController, deletePostController } = require('../../controllers/myPosts');

const myPosts = (path, router) => {
  router
    .route(`${path}`)
    .get(privateRoute, renderMyPosts, render404page)
    .post(bodyParser, privateRoute, validateForm, addPostController, redirectMiddleware);
  router.delete(`${path}/:id`, privateRoute, deletePostController, render404page);
};

module.exports = myPosts;
