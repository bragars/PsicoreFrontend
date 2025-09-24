import { Component } from '@angular/core';
import { DocumentsComponent } from 'src/app/components';
import { GreetingComponent } from 'src/app/components/home/greeting/greeting.component';
import { NextSessionComponent } from 'src/app/components/home/next-session/next-session.component';
import { QuickActionsComponent } from 'src/app/components/home/quick-actions/quick-actions.component';
import { RecommendationsComponent } from 'src/app/components/home/recommendations/recommendations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [DocumentsComponent,
    GreetingComponent,
    QuickActionsComponent,
    NextSessionComponent,
    RecommendationsComponent,
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
