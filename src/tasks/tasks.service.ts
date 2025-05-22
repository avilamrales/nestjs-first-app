import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['task1', 'task2', 'task3'];
  }

  createTask() {
    return 'creating task';
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
