import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [];

  constructor() { }

  addNewTask(taskName) {
    let taskId = this.tasks.length + 1;
    let completed = false;

    this.tasks.push({
      taskId,
      taskName,
      completed
    });
  }

  deleteTask(taskId) {
    let taskToDelete = this.findTaskIndex(taskId);
    this.tasks.splice(taskToDelete, 1);
  }

  findTaskIndex(taskId) {
    return this.tasks.findIndex(task => task.taskId === taskId)
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
    return this.tasks;
  }

}
