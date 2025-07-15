import { Injectable } from "@nestjs/common";
import { Task, TaskStatus, DEFAULT_PAGE, DEFAULT_LIMIT } from "./task.model";
import { SearchAndPaginationDTO } from './dto/search-and-pagination.dto'

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Second task",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "3",
      title: "Task 3",
      description: "Third task",
      status: TaskStatus.COMPLETED,
    },
    {
      id: "4",
      title: "Task 4",
      description: "Fourth task",
      status: TaskStatus.PENDING,
    },
    {
      id: "5",
      title: "Task 5",
      description: "Fifth task",
      status: TaskStatus.IN_PROGRESS,
    },
  ];
  getFilteredTasks(
      { status, page = DEFAULT_PAGE, limit = DEFAULT_LIMIT }: SearchAndPaginationDTO
  ): Task[]|any {
    const skip = limit * (page-1)
    const filteredTasks =  status
        ? this.tasks.filter((task: Task) => task.status === status)
        : this.tasks

    return filteredTasks.slice(skip, limit * page)
  }
}
