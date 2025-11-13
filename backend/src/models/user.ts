import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { ClientIssueType } from '../enums/questions';
import { RoleList } from '../enums/roles';

@modelOptions({
  schemaOptions: { collection: 'users', timestamps: true }
})
export class UserSchema {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public specialization!: ClientIssueType;

  @prop({ required: true })
  public passwordHash!: string;

  @prop({ default: RoleList.MANAGER })
  public role!: RoleList;
}

export const ManagerModel = getModelForClass(UserSchema);
