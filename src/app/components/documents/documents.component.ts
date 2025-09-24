import { Component, inject, OnInit, signal } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { DocumentCardComponent } from '../document-card/document-card.component';
import { Document } from 'src/app/models';
import { toSignal } from '@angular/core/rxjs-interop'; // ✅ FIX: Import toSignal

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  standalone: true,
  imports: [DocumentCardComponent],
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  private service = inject(DocumentsService)
  documents = toSignal(this.service.getAllDocuments(), { initialValue: [] });
}
