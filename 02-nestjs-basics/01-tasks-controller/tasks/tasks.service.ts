import { Injectable, NotFoundException } from "@nestjs/common"
import { v6 as uuidv6 } from 'uuid'
import {Task} from "./task.model"

@Injectable()
export class TasksService {
  private tasks: Task[] = []

  getAllTasks(): Task[] {
    return this.tasks
  }

  getTaskById(id: string): Task|undefined {
    const task = this.tasks.find(u => u.id === id)
    if (!task) throw new NotFoundException(`task with id ${id} is not found`)
    return task
  }

  createTask(data: Task): Task {
    const task = {...data, id: uuidv6()}
    this.tasks.push(task)
    return task
  }

  updateTask(id: string, update: Task): Task|undefined {
    const task = this.getTaskById(id)
    if(task) Object.assign(task, update)// Apply updates
    return task
  }

  deleteTask(id: string): Task {
    const task = this.getTaskById(id)
    if(task) this.tasks = this.tasks.filter(task => task.id !== id)
    return task
  }
}
