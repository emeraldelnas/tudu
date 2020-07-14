import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {
  taskForm;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
  ) {
    this.taskForm = this.formBuilder.group({
      taskName : '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(task) {
    this.taskService.addNewTask(task.taskName);
    this.taskForm.reset();
    
    console.warn("Task saved.", task);
  }

}
