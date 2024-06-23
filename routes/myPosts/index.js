const express = require('express');
const bodyParser = express.urlencoded({ extended: false });
const validateForm = require('../../middleware/addPost/validateForm.middleware');
const redirectMiddleware = require('../../middleware/addPost/redirect.middleware');
const render404page = require('../../middleware/render404page/render404page');
const { renderMyPosts, addPostController, deletePostController } = require('../../controllers/myPosts');
const restrictedRoute = require('../../middleware/restrictedRoute');
const { setPageContext } = require('../../middleware/authContext');

const myPosts = (path, router) => {
  router
    .route(`${path}`)
    .get(restrictedRoute, setPageContext, renderMyPosts, render404page)
    .post(bodyParser, restrictedRoute, setPageContext, validateForm, addPostController, redirectMiddleware);
  router.delete(`${path}/:id`, restrictedRoute, setPageContext, deletePostController, render404page);
};

module.exports = myPosts;
