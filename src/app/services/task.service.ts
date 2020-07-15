import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 0;

  constructor() { }

  addNewTask(taskName: string): void {
    let taskId = this.nextId++;
    const completed = false;

    let newTask: Task = {
      taskId,
      taskName,
      completed
    };
    
    this.tasks.push(newTask);
  }

  deleteTask(taskId: number): void {
    let taskToDelete = this.findTaskIndex(taskId);
    this.tasks.splice(taskToDelete, 1);
  }

  findTaskIndex(taskId:number ): number {
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
