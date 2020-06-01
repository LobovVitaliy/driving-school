require('$src/configs/init');

const Hapi = require('@hapi/hapi');

const routes = require('$src/routes');

async function startServer() {
  const server = Hapi.server({
    host: 'localhost',
    port: 3000,
  });

  server.route(routes);

  await server.start();

  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (e) => {
  console.error(e);
  process.exit(1);
});

startServer();