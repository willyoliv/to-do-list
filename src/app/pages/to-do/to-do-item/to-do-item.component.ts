import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Unsubscribable } from 'rxjs';

import { Task } from 'src/app/models/task.model';
import { TasksService } from './../../../services/tasks.service';


@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input('taskObj') task?: Task;
  @Input() taskId?: number;
  @Output() deletedTask = new EventEmitter<boolean>();
  @ViewChild('checkboxInput') checkboxInput?: ElementRef;
  @Output() warnTaskWasDone: EventEmitter<any> = new EventEmitter();

  unSubDelete: any;
  unSubUpload: any;

  constructor(private taskService:TasksService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.unSubDelete) {
      this.unSubDelete.unsubscribe();
    }
    if (this.unSubUpload) {
      this.unSubUpload.unsubscribe();
    }
  }

  delete(id: number): void {
    this.unSubDelete = this.taskService.delete(id).subscribe();
    this.snackBar.open('Tarefa excluída!', 'Ok', { duration: 3000 }); 
    this.deletedTask.emit(true);
  }

  markAsDone($event: MatCheckboxChange) {
    this.task!.done = $event.checked ;
    this.unSubUpload = this.taskService.upload(this.task!).subscribe();
    // this.warnTaskWasDone.emit({ id: this.taskId, value: event.checked });
  }

  showTaskDetails($event: MouseEvent) {
    console.log("show task");
  }

  stopClickPropagation($event: MouseEvent) {
    $event.stopPropagation();
  }

}
