import { DocumentType } from '@typegoose/typegoose';
import 'dotenv/config';
import { DeleteResult, Types, UpdateWriteOpResult } from 'mongoose';
import { UserModel, UserSchema } from '../models/user';

const getAll = async (): Promise<DocumentType<UserSchema>[]> => {
  return UserModel.find();
};

const getById = async (id: Types.ObjectId): Promise<DocumentType<UserSchema>> => {
  return UserModel.findById(id);
};

const create = async (userData: UserSchema): Promise<DocumentType<UserSchema>> => {
  return UserModel.create(userData);
};

const update = async (id: Types.ObjectId, userData: UserSchema): Promise<UpdateWriteOpResult> => {
  return UserModel.updateOne(id, userData);
};

const remove = async (id: Types.ObjectId): Promise<DeleteResult> => {
  return UserModel.deleteOne(id);
};

export default {
  create,
  remove,
  getAll,
  getById,
  update
};
