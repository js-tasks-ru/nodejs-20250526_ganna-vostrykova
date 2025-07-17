import { Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskStatus } from "./task.model";
import {SearchAndPaginationDTO} from "./dto/search-and-pagination.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  getTasks(@Query() searchAndPaginationDTO:SearchAndPaginationDTO) {
    return this.tasksService.getFilteredTasks(searchAndPaginationDTO)
  }
}
