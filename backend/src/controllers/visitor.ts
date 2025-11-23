import { FastifyInstance } from 'fastify/types/instance';
import { Types } from 'mongoose';
import { VisitorSchema } from '../models/visitor';
import VisitorService from '../services/visitor';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/visitors', async (req, rep) => {
    rep.code(200).send(await VisitorService.getAll());
  });

  fastify.get<{
    Params: {
      id: Types.ObjectId;
    };
  }>('/visitor/:id', async (req, rep) => {
    rep.code(200).send(await VisitorService.getById(req.params.id));
  });

  fastify.post<{ Body: VisitorSchema }>('/visitor', async (req, res) => {
    res.code(200).send(await VisitorService.create(req.body));
  });

  fastify.put<{
    Params: {
      id: Types.ObjectId;
    };
    Body: VisitorSchema;
  }>('/visitor/:id', async (req, res) => {
    res.code(200).send(await VisitorService.update(req.params.id, req.body));
  });

  fastify.delete<{
    Params: {
      id: Types.ObjectId;
    };
  }>('/visitor/:id', async (req, res) => {
    res.code(200).send(await VisitorService.remove(req.params.id));
  });
};
