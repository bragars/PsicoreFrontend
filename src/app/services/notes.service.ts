import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model'; // Replace with your note model if needed
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private api: ApiService) { }

  createNote(note: Note) {
    return this.api.post<Note>('api/v1/notes', note);
  }

  getNoteById(id: number) {
    return this.api.get<Note>(`api/v1/notes/${id}`);
  }

  updateNote(note: Note) {
    return this.api.put<Note>('api/v1/notes', note);
  }

  deleteNoteById(id: number) {
    return this.api.delete<void>(`api/v1/notes/${id}`);
  }

  getAllNotes() {
    return this.api.get<Note[]>('api/v1/notes');
  }
}
