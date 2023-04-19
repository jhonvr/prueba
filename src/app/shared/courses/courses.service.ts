import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
import { CourseModel } from 'src/app/core/courses/model/model';

@Injectable({providedIn: 'root'})
export class CoursesService {
  private urlApi: string = "http://localhost:3000/courses";
  constructor(private http: HttpClient) { }

  get = () => {
    return this.http.get<any>(this.urlApi).pipe(retry(0));
  }

  post = (json: CourseModel) => {
    return this.http.post<any>(this.urlApi, json).pipe(retry(0));
  }

  put = (json: CourseModel) => {
    return this.http.put<any>(this.urlApi.concat("/") + json.id, json).pipe(retry(0));
  }

}
