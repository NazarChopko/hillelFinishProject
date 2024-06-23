const config = require('config');
const sqlite = require('better-sqlite3');
const session = require('express-session');
const SqliteStore = require('better-sqlite3-session-store')(session);
const db = new sqlite('./prisma/dev.db', { verbose: console.log });

const sessionMiddleware = session({
  store: new SqliteStore({
    client: db,
    expired: {
      clear: true,
      intervalMs: config.expiredStorage
    }
  }),
  cookie: config.cookieOptions,
  secret: config.secret,
  saveUninitialized: false,
  resave: false,
  name: config.sessionName
});

module.exports = sessionMiddleware;
