import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';
import { DocumentCardComponent } from '../document-card/document-card.component';
import { Document } from 'src/app/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  standalone: true,
  imports: [DocumentCardComponent],
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit, OnDestroy {
  private service = inject(DocumentsService);
  private documentsSub!: Subscription;

  documents = signal<Document[]>([]);

  ngOnInit(): void {
    this.documentsSub = this.service.getAllDocuments().subscribe((response: any) => {
      console.log(response)
      const docsArray = response || [];
      this.documents.set(docsArray);
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.documentsSub) {
      this.documentsSub.unsubscribe();
    }
  }
}
