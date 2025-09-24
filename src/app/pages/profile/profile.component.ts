import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Frontend Developer specializing in Angular and creating beautiful, responsive user interfaces.',
    location: 'Brasília, Brazil',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  };
}
