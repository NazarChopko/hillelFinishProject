const bcrypt = require('bcrypt');
const { Prisma } = require('@prisma/client');
const { createNewUser, findUserByEmail } = require('../../services/auth.service');

const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await createNewUser({ email, password: hash, role: !!role });
    res.redirect('/api/auth/signin');
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.render('auth', {
          data: req.body,
          title: 'Sign up',
          type: 'signup',
          errors: { message: 'Such user already exist' }
        });
      }
      return res.status(400).json({ message: 'Bad request' });
    }
    res.status(400).json({ message: 'Bad request' });
  }
};

const renderSigupForm = (req, res) => {
  try {
    const isUserLogged = req.token;
    if (isUserLogged) {
      return res.redirect('/api/');
    }
    res.render('auth', { title: 'Sign up', isUserLogged, type: 'signup' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
      return res.render('auth', { data: req.body, title: 'Sign in', errors: { message: 'Such user is not exist!' } });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.render('auth', { data: req.body, title: 'Sign in', errors: { message: 'Wrong password!' } });
    }
    res.cookie('token', user.id);
    res.cookie('role', user.role);
    res.redirect('/api/');
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const logout = (req, res) => {
  try {
    const isUserLogged = req.token;
    if (isUserLogged) {
      res.clearCookie('token');
      res.clearCookie('role');
    }
    res.redirect('/api/auth/signin');
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const renderSiginForm = (req, res) => {
  try {
    const isUserLogged = req.token;
    if (isUserLogged) {
      return res.redirect('/api/');
    }
    res.render('auth', { title: 'Sign in' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signup, renderSigupForm, signin, renderSiginForm, logout };
