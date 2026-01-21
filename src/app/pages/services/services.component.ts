import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: ['React, Angular, Vue', 'Full Stack Solutions', 'API Development', 'Progressive Web Apps'],
      icon: '🌐'
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      icon: '📱'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      features: ['AWS', 'Azure', 'Google Cloud', 'Serverless Architecture'],
      icon: '☁️'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and infrastructure management',
      features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
      icon: '⚙️'
    },
    {
      title: 'Data & Analytics',
      description: 'Business intelligence and data-driven solutions',
      features: ['Data Warehouse', 'Machine Learning', 'BI Dashboards', 'Big Data'],
      icon: '📊'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology and digital transformation',
      features: ['Tech Strategy', 'Legacy Modernization', 'Security Audit', 'Digital Transformation'],
      icon: '💼'
    }
  ];
}
