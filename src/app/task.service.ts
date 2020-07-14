import { Injectable } from '@angular/core';
import { Task } from './interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() { }

  addNewTask(taskName: string): void {
    console.log(Object.keys(this.tasks).length);
    let taskId = Object.keys(this.tasks).length + 1;
    let completed = false;

    this.tasks.push({
      taskId,
      taskName,
      completed
    });
  }

  deleteTask(taskId: number): void {
    let taskToDelete = this.findTaskIndex(taskId);
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
