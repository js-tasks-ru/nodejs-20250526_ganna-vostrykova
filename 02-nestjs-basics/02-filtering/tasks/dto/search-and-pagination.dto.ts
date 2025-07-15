import {IsOptional, IsIn, IsInt} from 'class-validator'
import {TaskStatus} from '../task.model'

export class SearchAndPaginationDTO {
    @IsOptional()
    //@IsInt()
    page: number

    @IsOptional()
    //@IsInt()
    limit: number

    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.COMPLETED])
    status: string;
}