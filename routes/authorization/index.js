const express = require('express');
const urlParser = express.urlencoded({ extended: false });
const authValidator = require('../../middleware/authorization/auth.validaton.middleware');
const redirectErrorHandling = require('../../middleware/authorization/redirect.middleware');
const { signup, renderSigupForm, renderSiginForm, signin, logout } = require('../../controllers/authorization');
const transformReq = require('../../middleware/transformReq/transformReq');

const authorization = (path, router) => {
  router
    .route(`${path}/signup`)
    .get(transformReq, renderSigupForm)
    .post(urlParser, authValidator, signup, redirectErrorHandling('Sign up'));

  router
    .route(`${path}/signin`)
    .get(transformReq, renderSiginForm)
    .post(urlParser, authValidator, signin, redirectErrorHandling('Sign in'));

  router.route(`${path}/logout`).get(transformReq, logout);
};

module.exports = authorization;
