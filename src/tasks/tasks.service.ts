import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['Tasks 1', 'Tasks 2', 'Tasks 3'];
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
