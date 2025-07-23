import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks()
  }

  @Get(":id")
  getTaskById(@Param("id") id: string) {
    return this.tasksService.getTaskById(id)
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task)
  }

  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() task: Task) {
    return this.tasksService.updateTask(id, task)
  }

  @Delete(":id")
  deleteTask(@Param("id") id: string) {
    return this.tasksService.deleteTask(id)
  }
}
