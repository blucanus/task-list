import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of} from 'rxjs'; //porque tiene que ser asincrónico
import { Task } from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(
    private http: HttpClient
  ) { }

  
  getTask(): Observable<Task[]> {

    /* const tasks = of(TASKS);
    return tasks */
    return this.http.get<Task[]>(this.apiUrl)
  }
}
