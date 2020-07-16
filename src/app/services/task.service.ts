import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[];
  private nextId;

  constructor() {
    this.tasks = this.getTasksFromLocalStorage();
    this.nextId = this.tasks.length === 0 ? 0 : this.tasks[this.tasks.length - 1].taskId;
  }

  addNewTask(taskName: string): void {
    let taskId = ++this.nextId;
    const completed = false;

    let newTask: Task = {
      taskId,
      taskName,
      completed
    };
    
    this.tasks.push(newTask);

    this.saveTasksToLocalStorage()
  }

  deleteTask(taskId: number): void {
    let taskToDelete = this.findTaskIndex(taskId);
    this.tasks.splice(taskToDelete, 1);

    this.saveTasksToLocalStorage()
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

  getTasksFromLocalStorage(): Task[] {
    let tasksFromLocalStorage = JSON.parse(localStorage.getItem('tudu-tasks'));
    
    return tasksFromLocalStorage ? tasksFromLocalStorage.tasks : [];
  }

  saveTasksToLocalStorage(): void {
    localStorage.setItem('tudu-tasks', JSON.stringify({tasks : this.tasks}));
  }

}
