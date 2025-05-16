import { Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { find } from 'rxjs';
import { UpdateTaskDto } from './dto/update-task.dto';
import { createTaskDto } from './dto/create-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(` Task with id ${id} not found`);
    }
    return taskFound;
  }

  createTask(task: createTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
  updeteTask(task: UpdateTaskDto) {
    console.log(task);
    
    return 'actualizando tarea';
  }
  deleteTask() {
    return 'eliminando tareas';
  }
  updateTaskStatus() {
    return 'actualizando el estado de una tarea';
  }
}
