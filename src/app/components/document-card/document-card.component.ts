import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Document } from 'src/app/models';

@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent {
  doc = input.required<Document>();
}
