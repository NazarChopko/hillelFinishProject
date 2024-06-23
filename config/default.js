const isProd = process.env.MODE === 'production';
const expiredTime = 1000 * 60 * 60 * 24;

module.exports = {
  port: process.env.PORT || 3009,
  cookieOptions: { httpOnly: true, sameSite: 'strict', secure: isProd, expires: expiredTime },
  sessionName: process.env.SESSION_NAME || 'sessionId',
  secret: process.env.SECRET || 'secret secret',
  expiredStorage: expiredTime
};
