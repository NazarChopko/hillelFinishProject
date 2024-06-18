const express = require('express');
const bodyParser = express.urlencoded({ extended: false });
const transformReq = require('../../middleware/transformReq/transformReq');
const { renderAllPosts } = require('../../controllers/allPosts');
const { addNewComment } = require('../../controllers/comments');

const allPosts = (path, router) => {
  router.route(`${path}`).get(transformReq, renderAllPosts).post(bodyParser, transformReq, addNewComment);
};

module.exports = allPosts;
