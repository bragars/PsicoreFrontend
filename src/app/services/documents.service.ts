import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class DocumentsService {
  constructor(private api: ApiService) { }

  createDocument(documentData: any) {
    return this.api.post(`/api/v1/documents`, documentData);
  }

  getDocument(documentId: string) {
    return this.api.get(`/api/v1/documents/${documentId}`);
  }

  getAllDocuments() {
    return this.api.get(`/api/v1/documents`);
  }

  updateDocument(documentId: string, documentData: any) {
    return this.api.put(`/api/v1/documents/${documentId}`, documentData);
  }

  deleteDocument(documentId: string) {
    return this.api.delete(`/api/v1/documents/${documentId}`);
  }
}
