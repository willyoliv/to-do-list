import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  formCreateTask?: FormGroup;
  id?: number;
  task?: any;

  constructor(private taskService: TasksService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask() {
    this.id = this.router.snapshot.params['id'];
    this.taskService.getTaskById(this.id!).subscribe({
      next: (data) => this.task = data,
      complete: () => {
        this.formCreateTask = new FormGroup({
          'title': new FormControl({value: this.task.title, disabled: true }),
          'description': new FormControl({value: this.task.description, disabled: true}),
          'date': new FormControl({value: this.task.date, disabled: true}),
          'done': new FormControl({value: this.task.done, disabled: true})
        });
      } 
    });
  }

}
