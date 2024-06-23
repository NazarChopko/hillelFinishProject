const authInitSessionAndRedirect = (redirectTo) => {
  return (req, res) => {
    req.session.context = req.__authContext;
    res.redirect(redirectTo || req.baseUrl);
  };
};

const authDestroySessionAndRedirect = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('sessionId');
    res.redirect('/api/');
  });
};

const setPageContext = (req, res, next) => {
  const isUserLogged = !!req.session?.context?.userId;
  req.__pageContext = {
    isUserLogged,
    role: req.session?.context?.role,
    userId: req.session?.context?.userId
  };
  next();
};

module.exports = { authDestroySessionAndRedirect, authInitSessionAndRedirect, setPageContext };
