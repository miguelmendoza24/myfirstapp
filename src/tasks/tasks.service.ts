import { Injectable, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { find } from 'rxjs';

export interface User{
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
    const taskFound =  this.tasks.find(task => task.id === id)
    
    if (!taskFound) {
      return new NotFoundException (` Task with id ${id} not found`)
    }
    return taskFound
    
  }

  createTask(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
  updeteTask() {
    return 'actualizando tarea';
  }
  deleteTask() {
    return 'eliminando tareas';
  }
  updateTaskStatus() {
    return 'actualizando el estado de una tarea';
  }
}
