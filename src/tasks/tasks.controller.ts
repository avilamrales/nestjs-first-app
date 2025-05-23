import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all tasks',
    description: 'Get all tasks with optional query parameters',
  })
  @ApiResponse({ status: 200, description: 'Return all tasks' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Tasks not found' })
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Get task by ID',
    description: 'Retrieve a specific task by its ID',
  })
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new task',
    description: 'Create a new task with the provided data',
  })
  createTask(@Body() task: CreateTaskDTO) {
    return this.tasksService.createTask(task);
  }

  @Put()
  @ApiOperation({
    summary: 'Update an existing task',
    description: 'Update an existing task with the provided data',
  })
  updateTask(@Body() task: UpdateTaskDTO) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  @ApiOperation({
    summary: 'Delete a task',
    description: 'Delete a task by its ID',
  })
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  @ApiOperation({
    summary: 'Update task status',
    description: 'Update the status of a task by its ID',
  })
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
