import fp from 'fastify-plugin';
import mongoose from 'mongoose';

const mongoosePlugin = fp(async (server) => {
  await mongoose.connect('mongodb://localhost:27017/', { dbName: 'test' });
  server.addHook('onClose', async () => {
    await mongoose.disconnect();
  });
});

export default mongoosePlugin;
