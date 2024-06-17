const express = require('express');
const urlParser = express.urlencoded({ extended: false });
const authValidator = require('../../middleware/authorization/auth.validaton.middleware');
const redirectErrorHandling = require('../../middleware/authorization/redirect.middleware');
const { signup, renderSigupForm, renderSiginForm, signin, logout } = require('../../controllers/authorization');
const checkIsUserLogged = require('../../middleware/checkUser/checkIsUserLogged');

const authorization = (path, router) => {
  router
    .route(`${path}/signup`)
    .get(checkIsUserLogged, renderSigupForm)
    .post(urlParser, authValidator, signup, redirectErrorHandling('Sign up'));

  router
    .route(`${path}/signin`)
    .get(checkIsUserLogged, renderSiginForm)
    .post(urlParser, authValidator, signin, redirectErrorHandling('Sign in'));

  router.route(`${path}/logout`).get(checkIsUserLogged, logout);
};

module.exports = authorization;
