import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {
  private baseUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) { }

  createDocument(documentData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/documents`, documentData);
  }

  getDocument(documentId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/documents/${documentId}`);
  }

  getAllDocuments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/documents`);
  }

  updateDocument(documentId: string, documentData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/documents/${documentId}`, documentData);
  }

  deleteDocument(documentId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/documents/${documentId}`);
  }
}
