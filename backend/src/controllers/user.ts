import { FastifyInstance } from 'fastify/types/instance';
import UserService from '../services/user';
import { UserSchema } from '../models/user';
import { Types } from 'mongoose';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/users', async (req, rep) => {
    rep.code(200).send(await UserService.getAll());
  });

  fastify.get<{
    Params: {
      id: Types.ObjectId;
    };
  }>('/user/:id', async (req, rep) => {
    rep.code(200).send(await UserService.getById(req.params.id));
  });

  fastify.post<{ Body: UserSchema }>('/user', async (req, res) => {
    res.code(200).send(await UserService.create(req.body));
  });

  fastify.put<{
    Params: {
      id: Types.ObjectId;
    };
    Body: UserSchema;
  }>('/user/:id', async (req, res) => {
    res.code(200).send(await UserService.update(req.params.id, req.body));
  });

  fastify.delete<{
    Params: {
      id: Types.ObjectId;
    };
  }>('/user/:id', async (req, res) => {
    res.code(200).send(await UserService.remove(req.params.id));
  });
};
