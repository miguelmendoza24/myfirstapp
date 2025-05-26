import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Param} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { createTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getAllTasks(@Query() query: any) {
    console.log(query);

    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param(':id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a tasks' })
  createTask(@Body() task: createTaskDto) {
    return this.tasksService.createTask(task);
  }
  @Put()
  updeteTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updeteTask(task);
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
