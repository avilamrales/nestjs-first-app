import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(task: Task) {
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  updateTask() {
    return 'updating task';
  }

  deleteTask() {
    return 'deleting task';
  }
  updateTaskStatus() {
    return 'updating task status';
  }
}
