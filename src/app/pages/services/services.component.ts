import { Component, inject, signal } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
import { Therapist } from 'src/app/models/therapist.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  private service = inject(UserService);
  private theRapistsSub!: Subscription;

  therapists = signal<Therapist[]>([]);

  ngOnInit(): void {
    this.theRapistsSub = this.service.getAllTherapist().subscribe((response: any) => {
      console.log(response)
      const docsArray = response || [];
      this.therapists.set(docsArray);
    });
  }

  ngOnDestroy(): void {
    if (this.theRapistsSub) {
      this.theRapistsSub.unsubscribe();
    }
  }
}
