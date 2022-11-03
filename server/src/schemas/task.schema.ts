import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  startTime: string;

  @Prop()
  endTime: string;

  @Prop()
  splits: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
