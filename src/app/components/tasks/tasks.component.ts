import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    //like promise
    this.taskService.getTask().subscribe((tasks) => //averiguar qué era esto
    this.tasks = tasks);
  }
}
