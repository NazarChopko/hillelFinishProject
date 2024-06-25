const expiredTime = 1000 * 60 * 60 * 24;

module.exports = {
  port: 3000,
  cookieOptions: { httpOnly: true, sameSite: 'strict', secure: false, expires: expiredTime },
  sessionName: process.env.SESSION_NAME || 'sessionId',
  secret: process.env.SECRET || 'secret secret',
  expiredStorage: expiredTime
};
