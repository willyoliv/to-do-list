import { Component, OnInit } from '@angular/core';

import { Task } from './../../models/task.model';
import { TasksService } from './../../services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasksList$?: Observable<Task[]>;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksList$ = this.taskService.getTasks();
    
    this.tasksList$?.subscribe({
      next: () => {},
      error: (error) => {},
      complete: () => {},
    });
  }

  reloadList(reload: boolean) {
    this.getTasks();
  }

}
