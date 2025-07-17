import {IsOptional, IsNotEmpty, MinLength, MaxLength, IsString, IsIn} from 'class-validator';
import { TaskStatus } from '../task.model'


export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(50)
    description: string;

    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.COMPLETED])
    status?: TaskStatus;
}