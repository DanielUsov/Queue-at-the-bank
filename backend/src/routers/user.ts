import { FastifyInstance } from 'fastify/types/instance';
import UserService from '../controllers/user';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async (req, rep) => {
    rep.code(200).send(await UserService.getAll(fastify));
  });
};
