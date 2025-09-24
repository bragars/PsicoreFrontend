import { Component } from '@angular/core';
import { DocumentsComponent } from 'src/app/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [DocumentsComponent],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
