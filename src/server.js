import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const app = fastify({ logger: true });

const handleHome = () => console.log('Somebody is trying to go home.');

app.get('/', handleHome);

const start = async () => {
  try {
    await app.listen(process.env.PORT);
  } catch (err) {
    app.log.error(err);
  }
};

start();
