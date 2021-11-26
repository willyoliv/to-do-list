import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './pages/task/task.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: ToDoComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'create-task', component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: 'task/:id', component: TaskComponent, canActivate: [AuthGuard] },
  { path: 'edit-task/:id', component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
