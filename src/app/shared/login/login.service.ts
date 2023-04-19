import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login = (): Observable<any> => {
    const url = "";
    return this.http.post<any>(url, {}).pipe(retry(0));
  };
}
