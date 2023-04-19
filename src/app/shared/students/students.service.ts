import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
import { StudentsModel } from 'src/app/core/students/model/model';

@Injectable({providedIn: 'root'})
export class StudentsService {
  private urlApi: string = "http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  get = () => {
    return this.http.get<any>(this.urlApi).pipe(retry(0));
  }

  post = (json: StudentsModel) => {
    return this.http.post<any>(this.urlApi, json).pipe(retry(0));
  }

  put = (json: StudentsModel) => {
    return this.http.put<any>(this.urlApi.concat("/") + json.id, json).pipe(retry(0));
  }

}
