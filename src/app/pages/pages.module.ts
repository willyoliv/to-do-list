import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToDoComponent } from './to-do/to-do.component';
import { ToDoItemComponent } from './to-do/to-do-item/to-do-item.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ToDoComponent,
    ToDoItemComponent,
    CreateTaskComponent,
    TaskComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
