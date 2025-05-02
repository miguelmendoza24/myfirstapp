import { Injectable } from '@nestjs/common';

export interface User{
  name: string;
  age: number;
}


@Injectable()
export class TasksService {
  getTasks(): User{

    return {
      name: 'Jhon Doe',
      age: 48
    }
  }
  createTask() {
    return 'Creando tareas';
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
