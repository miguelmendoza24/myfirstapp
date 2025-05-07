import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);

    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param(':id') id: string) {
    
    return this.tasksService.getTask(parseInt(id))
  }
  

  @Post()
  createTask(@Body() task: any) {
    return this.tasksService.createTask(task);
  }
  @Put()
  updeteTask() {
    return this.tasksService.updeteTask();
  }
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
