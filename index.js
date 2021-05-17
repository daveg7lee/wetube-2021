import fastify from 'fastify';

const app = fastify();

const start = async () => {
  try {
    await app.listen(3000);
  } catch (err) {
    app.log.error(err);
  }
};

start();
