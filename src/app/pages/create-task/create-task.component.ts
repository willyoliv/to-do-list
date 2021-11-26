import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Task } from 'src/app/models/task.model';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  formCreateTask?: FormGroup;
  id?: number;
  path?: string = '';
  task?: any;
  title: string = '';
  isFormUpload: boolean = false;

  constructor(private taskService: TasksService, private snackBar: MatSnackBar, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.router.snapshot.url[0].path;
    
    if (this.path === "edit-task") {
      this.loadTask();
      this.title = "Editar tarefa";
      this.isFormUpload = true;
    } else {
      this.formCreateTask = new FormGroup({
        'title': new FormControl(null),
        'description': new FormControl(null),
        'date': new FormControl(null),
      });
      this.title = "Criar tarefa";
    }
  }

  loadTask() {
    this.id = this.router.snapshot.params['id'];
    this.taskService.getTaskById(this.id!).subscribe({
      next: (data) => this.task = data,
      complete: () => {
        this.formCreateTask = new FormGroup({
          'title': new FormControl({value: this.task.title, disabled: true }),
          'description': new FormControl(this.task.description),
          'date': new FormControl(this.task.date),
        });
      } 
    });
  }

  onSubmit() {
    if (!this.isFormUpload) {
      this.task = new Task();
    }
    let title = this.formCreateTask?.controls['title'].value;
    let description = this.formCreateTask?.controls['description'].value;
    let date = this.formCreateTask?.controls['date'].value;
    this.task.date = date;
    this.task.description = description;
    this.task.title = title;
    if (this.isFormUpload) {
      this.taskService.upload(this.task).subscribe({
        complete: () => {
          this.snackBar.open('Tarefa atualizada!', 'Ok', { duration: 3000 });
        }
      });
    } else {
      this.taskService.create(this.task).subscribe({
        complete: () => {
          this.snackBar.open('Tarefa cadastrada!', 'Ok', { duration: 3000 });
          this.formCreateTask?.reset();
        }
      });
    }
    
  }

}
