import { DocumentType } from '@typegoose/typegoose';
import 'dotenv/config';
import { DeleteResult, Types, UpdateWriteOpResult } from 'mongoose';
import { VisitorModel, VisitorSchema } from '../models/visitor';

const getAll = async (): Promise<DocumentType<VisitorSchema>[]> => {
  return VisitorModel.find();
};

const getById = async (id: Types.ObjectId): Promise<DocumentType<VisitorSchema>> => {
  return VisitorModel.findById(id);
};

const create = async (visitorData: VisitorSchema): Promise<DocumentType<VisitorSchema>> => {
  return VisitorModel.create(visitorData);
};

const update = async (id: Types.ObjectId, visitorData: VisitorSchema): Promise<UpdateWriteOpResult> => {
  return VisitorModel.updateOne(id, visitorData);
};

const remove = async (id: Types.ObjectId): Promise<DeleteResult> => {
  return VisitorModel.deleteOne(id);
};

export default {
  create,
  remove,
  getAll,
  getById,
  update
};
