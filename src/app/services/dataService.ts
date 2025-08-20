import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  userAuth(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/v1/auth/authenticate`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/v1/auth/register`, data);
  }
}
