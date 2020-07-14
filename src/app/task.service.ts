import { Injectable } from '@angular/core';
import { Task } from './interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() { }

  addNewTask(taskName: string): void {
    const taskId = Object.keys(this.tasks).length + 1;
    const completed = false;

    this.tasks.push({
      taskId,
      taskName,
      completed
    });
  }

  deleteTask(taskId: number): void {
    const taskToDelete = this.findTaskIndex(taskId);
    this.tasks.splice(taskToDelete, 1);
  }

  findTaskIndex(taskId): number {
    return this.tasks.findIndex(task => task.taskId === taskId)
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  clearTasks(): Task[] {
    this.tasks = [];
    return this.tasks;
  }

}
