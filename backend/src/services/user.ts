import 'dotenv/config';
import { FastifyInstance } from 'fastify';
const getAll = async (fastify: FastifyInstance): Promise<any> => {
  return await UserModel.getAll(fastify);
};
