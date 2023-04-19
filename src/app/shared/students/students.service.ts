import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StudentsService {
  private urlApi: string = "http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  get = () => {
    return this.http.get<any>(this.urlApi).pipe(retry(0));
  }

}
