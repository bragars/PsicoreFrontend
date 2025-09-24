import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-next-session',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule, DatePipe],
  templateUrl: './next-session.component.html',
})
export class NextSessionComponent {
  nextSession = {
    therapist: 'Dr. Ana Torres',
    date: new Date(Date.now() + 86400000 * 2),
    time: '14:00',
    avatarUrl: 'https://i.pravatar.cc/150?u=1'
  };
}
