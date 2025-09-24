import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './recommendations.component.html',
})
export class RecommendationsComponent {
  recommendations = [
    { title: 'Article: 5 Mindfulness Techniques', icon: 'self_improvement' },
    { title: 'Activity: Guided Breathing Exercise', icon: 'air' },
    { title: 'Journal Prompt: What are you grateful for today?', icon: 'edit' },
  ];
}
