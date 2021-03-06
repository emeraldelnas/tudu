import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  updateLocalStorageTasks(): void {
    this.taskService.saveTasksToLocalStorage();
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }

}
