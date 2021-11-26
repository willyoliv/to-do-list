import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './pages/task/task.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'edit-task/:id', component: CreateTaskComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
