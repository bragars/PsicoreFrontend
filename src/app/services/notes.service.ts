import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note'; // Replace with your note model if needed

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl = 'http://your-backend-api-url'; // Replace with your backend API base URL

  constructor(private http: HttpClient) { }

  createNote(note: Note): Observable<Note> {
    const url = `${this.baseUrl}/notes`;
    return this.http.post<Note>(url, note);
  }

  getNoteById(id: number): Observable<Note> {
    const url = `${this.baseUrl}/notes/${id}`;
    return this.http.get<Note>(url);
  }

  updateNote(note: Note): Observable<Note> {
    const url = `${this.baseUrl}/notes/${note.id}`;
    return this.http.put<Note>(url, note);
  }

  deleteNoteById(id: number): Observable<void> {
    const url = `${this.baseUrl}/notes/${id}`;
    return this.http.delete<void>(url);
  }

  getAllNotes(): Observable<Note[]> {
    const url = `${this.baseUrl}/notes`;
    return this.http.get<Note[]>(url);
  }
}
