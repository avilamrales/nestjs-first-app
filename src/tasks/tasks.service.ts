import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: CreateTaskDTO[] = [];

  getTasks(): CreateTaskDTO[] {
    return this.tasks;
  }

  getTask(id: number): CreateTaskDTO | NotFoundException {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: CreateTaskDTO): CreateTaskDTO {
    console.log(task);
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }

  updateTask(task: UpdateTaskDTO) {
    console.log(task);
    return 'updating task';
  }

  deleteTask() {
    return 'deleting task';
  }
  updateTaskStatus() {
    return 'updating task status';
  }
}
