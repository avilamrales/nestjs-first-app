import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  getTasks(): Task[] {
    return [
      { id: 1, title: 'task1', description: 'description1' },
      { id: 2, title: 'task2', description: 'description2' },
    ];
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
