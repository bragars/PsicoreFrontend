import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  template: `<h1>{{ greeting }}, {{ userName }}</h1>`,
})
export class GreetingComponent {
  @Input() userName = 'User';
  greeting = 'Good morning';

  constructor() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good morning';
    } else if (hour < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }
  }
}
