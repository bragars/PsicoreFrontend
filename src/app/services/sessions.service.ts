import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/session.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class SessionsService {
  constructor(private api: ApiService) { }

  createSession(session: Session) {
    return this.api.post<Session>('api/v1/sessions', session);
  }

  getSessionById(id: number) {
    return this.api.get<Session>('api/v1/sessions');
  }

  updateSession(session: Session) {
    return this.api.put<Session>('api/v1/sessions', session);
  }

  deleteSessionById(id: number) {
    return this.api.delete<void>('api/v1/sessions');
  }

  getAllSessions(): Observable<Session[]> {
    return this.api.get<Session[]>('api/v1/sessions');
  }
}
