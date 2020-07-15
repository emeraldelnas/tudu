import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
  ) {

    this.taskForm = this.formBuilder.group({
      taskName : ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(task: Task): void {
    this.taskService.addNewTask(task.taskName);
    this.taskForm.reset();
  }

}
