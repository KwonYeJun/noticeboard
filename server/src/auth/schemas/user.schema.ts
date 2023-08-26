import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'userInfo' })
export class User extends Document {
  
  @Prop()
  userName: string;

  @Prop()
  userEmail: string;

  @Prop()
  userId: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
