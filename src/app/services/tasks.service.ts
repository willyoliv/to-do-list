import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Task } from './../models/task.model';

const URL = environment.URL_BASE;
const httpOptions = {
  headers: new HttpHeaders({
    'content-type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(URL);     
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(URL+"/"+id);     
  }

  create(task: Task): Observable<any> {
    return this.http.post<any>(URL, task, httpOptions);
  }

  delete(id: number): Observable<any> {
    let url = URL +'/' + id.toString();
    return this.http.delete(url);
  }

  upload(task: Task): Observable<any> {
    let url = URL +'/' + task.id;
    return this.http.put(url, task);
  }
}
