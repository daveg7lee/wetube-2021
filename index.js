import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await app.listen(3000);
  } catch (err) {
    console.log(err);
    app.log.error(err);
  }
};

start();
