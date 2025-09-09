import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  private baseUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) { }

  createSession(session: Session): Observable<Session> {
    const url = `${this.baseUrl}/sessions`;
    return this.http.post<Session>(url, session);
  }

  getSessionById(id: number): Observable<Session> {
    const url = `${this.baseUrl}/sessions/${id}`;
    return this.http.get<Session>(url);
  }

  updateSession(session: Session): Observable<Session> {
    const url = `${this.baseUrl}/sessions/${session.id}`;
    return this.http.put<Session>(url, session);
  }

  deleteSessionById(id: number): Observable<void> {
    const url = `${this.baseUrl}/sessions/${id}`;
    return this.http.delete<void>(url);
  }

  getAllSessions(): Observable<Session[]> {
    const url = `${this.baseUrl}/sessions`;
    return this.http.get<Session[]>(url);
  }
}
