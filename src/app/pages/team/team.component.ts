import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in software development',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Tech architect specializing in cloud solutions',
      image: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack expert with passion for innovation',
      image: '👨‍💻'
    },
    {
      name: 'Emily Davis',
      role: 'Design Lead',
      bio: 'UX/UI specialist creating beautiful interfaces',
      image: '👩‍🎨'
    },
    {
      name: 'David Wilson',
      role: 'DevOps Engineer',
      bio: 'Infrastructure expert ensuring 99.9% uptime',
      image: '⚙️'
    },
    {
      name: 'Lisa Anderson',
      role: 'Project Manager',
      bio: 'Agile expert keeping projects on track',
      image: '👩‍💼'
    }
  ];
}
