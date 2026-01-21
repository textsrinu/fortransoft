import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory',
      tech: 'React, Node.js, MongoDB',
      image: '🛒',
      category: 'Web'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with advanced features',
      tech: 'React Native, Firebase',
      image: '💳',
      category: 'Mobile'
    },
    {
      title: 'Cloud Analytics Platform',
      description: 'Big data analytics platform on AWS',
      tech: 'AWS, Python, Apache Spark',
      image: '📊',
      category: 'Cloud'
    },
    {
      title: 'SaaS Management Tool',
      description: 'Multi-tenant SaaS application for project management',
      tech: 'Angular, .NET Core, PostgreSQL',
      image: '📋',
      category: 'Web'
    },
    {
      title: 'IoT Device Dashboard',
      description: 'Real-time monitoring dashboard for IoT devices',
      tech: 'Vue.js, Node.js, InfluxDB',
      image: '📡',
      category: 'Cloud'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Telemedicine platform connecting patients with doctors',
      tech: 'Flutter, Firebase, Stripe',
      image: '⚕️',
      category: 'Mobile'
    }
  ];

  categories = ['All', 'Web', 'Mobile', 'Cloud'];
  selectedCategory = 'All';

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
