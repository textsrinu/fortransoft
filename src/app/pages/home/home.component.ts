import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      icon: '📱'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: '☁️'
    },
    {
      title: 'Consulting',
      description: 'Expert advice on technology strategy and digital transformation.',
      icon: '💼'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management.',
      icon: '⚙️'
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data-driven insights for growth.',
      icon: '📊'
    }
  ];

  features = [
    { title: 'Expert Team', description: '50+ seasoned professionals', icon: '👥' },
    { title: 'Quality First', description: 'ISO certified processes', icon: '✓' },
    { title: 'Timely Delivery', description: '99% on-time delivery', icon: '⏱️' },
    { title: '24/7 Support', description: 'Round-the-clock assistance', icon: '🛡️' }
  ];
}
