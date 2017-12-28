const app = require('./server/server');

app.listen(8088, () => {
  console.log('session-example listening on port 8088');
});