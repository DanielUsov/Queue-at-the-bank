import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { ClientIssueType } from '../enums/questions';

@modelOptions({
  schemaOptions: {
    collection: 'visitors',
    timestamps: { createdAt: true, updatedAt: false }
  }
})
export class VisitorSchema {
  @prop({ required: true, unique: true })
  public label!: string;

  @prop({ required: true, enum: ClientIssueType })
  public ClientIssueType!: ClientIssueType;

  @prop({ ref: () => 'ManagerSchema', default: null })
  public servedBy!: Types.ObjectId | null;
}

export const VisitorModel = getModelForClass(VisitorSchema);
