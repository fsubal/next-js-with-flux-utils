const express = require('express');
const next = require('next');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) {
      throw err;
    }
    console.log('> Running on http://localhost:3000');
  })
})