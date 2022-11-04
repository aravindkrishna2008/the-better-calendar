import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title: string;
  startTime: string;
  endTime: string;
  splits: number;
  _id: string;
}
