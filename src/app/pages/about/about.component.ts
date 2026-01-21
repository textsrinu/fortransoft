import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  milestones = [
    { year: '2010', title: 'Founded', description: 'FortranSoft was established' },
    { year: '2013', title: 'First 50 Projects', description: 'Reached major milestone' },
    { year: '2016', title: 'International Expansion', description: 'Opened offices globally' },
    { year: '2020', title: '150+ Projects', description: 'Served diverse industries' }
  ];
}
