import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

// --- Import Angular Material Modules ---
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

// Interface for a single journal entry
export interface JournalEntry {
  title: string;
  content: string;
  date: Date;
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent {
  private fb = inject(FormBuilder);

  journalEntries = signal<JournalEntry[]>([
    { title: 'A Good Day', content: 'Today was a productive day. I managed to finish the main feature and felt a great sense of accomplishment.', date: new Date() },
    { title: 'Initial Thoughts', content: 'Starting this new project. Feeling excited about the possibilities and the challenges ahead.', date: new Date(Date.now() - 86400000) }, // Yesterday
  ]);

  journalForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', [Validators.required, Validators.minLength(10)]],
  });

  addEntry(): void {
    if (this.journalForm.valid) {
      const newEntry: JournalEntry = {
        title: this.journalForm.value.title!,
        content: this.journalForm.value.content!,
        date: new Date(),
      };

      this.journalEntries.update(entries => [newEntry, ...entries]);

      this.journalForm.reset();
    }
  }
}
