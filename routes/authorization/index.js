const express = require('express');
const urlParser = express.urlencoded({ extended: false });
const authValidator = require('../../middleware/authorization/auth.validaton.middleware');
const redirectErrorHandling = require('../../middleware/authorization/redirect.middleware');
const { signup, renderSigupForm, renderSiginForm, signin } = require('../../controllers/authorization');
const { setPageContext } = require('../../middleware/authContext');
const { authDestroySessionAndRedirect, authInitSessionAndRedirect } = require('../../middleware/authContext');

const authorization = (path, router) => {
  router
    .route(`${path}/signup`)
    .get(setPageContext, renderSigupForm)
    .post(urlParser, authValidator, signup, redirectErrorHandling('Sign up'));

  router
    .route(`${path}/signin`)
    .get(setPageContext, renderSiginForm)
    .post(urlParser, authValidator, signin, authInitSessionAndRedirect('/api/'), redirectErrorHandling('Sign in'));

  router.route(`${path}/logout`).get(authDestroySessionAndRedirect);
};

module.exports = authorization;
