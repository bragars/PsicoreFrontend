import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Import Angular Material Modules ---
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  foundingYear = 2021;
  teamMembers = [
    { id: 1, name: 'Dr. Ana Torres', role: 'Founder & Lead Therapist', avatarUrl: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Dr. Marcos Rocha', role: 'Head of Family Therapy', avatarUrl: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Dra. Sofia Lima', role: 'Child Psychology Specialist', avatarUrl: 'https://i.pravatar.cc/150?u=3' }
  ];
}
