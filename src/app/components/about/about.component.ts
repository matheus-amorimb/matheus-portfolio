import { Component } from '@angular/core';

export type Experience = {
  id: number
  company: string
  dataStart: string
  dataEnd: string
  role: string
  description: string
  stacks: string
};

export type Skills = {
  id: number
  domain: string
  technologies: string[]
}


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  experiences: Experience[] = [
    {
      id: 1,
      company: "ihm stefanini",
      dataStart: "fev/2024",
      dataEnd: "atual",
      role: "Full Stack Software Developer",
      description: "Responsável, de forma interdisciplinar com times de automação e otimização, pelo desenvolvimento de uma aplicação que\n" +
        "realiza a otimização de processos industriais utilizando lógica Fuzzy.",
      stacks: "Java, Spring Boot, Javascript, Node.js, Angular, Python, PostgreSQL."
    },
    {
      id: 2,
      company: "ihm stefanini",
      dataStart: "jul/2023",
      dataEnd: "jan/2024",
      role: "Intern Software Developer",
      description: "Responsável pela sustentação da aplicação desenvolvida para a rede de postos Ale encarregada do agendamento dos abastecimentos de combustível de suas unidades.",
      stacks: "C#, .NET, ASP.NET Core, TypeScript, Angular"
    },
    {
      id: 3,
      company: "Universidade Federal de Minas Gerais",
      dataStart: "jan/2020",
      dataEnd: "jun/2025",
      role: "Engenharia Elétrica",
      description: "Graduação em engenharia elétrica com ênfase em computação.",
      stacks: "C, C++, MATLAB, Raspberry Pi, VHDL"
    }
  ]

  skills: Skills[] = [
    {
      id: 1,
      domain: "Languages",
      technologies: ["C#", "Python", "Java", "TypeScript/JavaScript", "SQL"]
    },

    {
      id: 2,
      domain: "Back-end",
      technologies: [".NET", "Node.js", "Spring Boot"]
    },

    {
      id: 3,
      domain: "Front-end",
      technologies: ["Angular", "React", "HTML", "CSS"]
    },

    {
      id: 4,
      domain: "Software engineering",
      technologies: ["TDD", "Microservices", "Design Patterns", "Clean Architecture", "Clean Code", "Refactoring", "DDD"]
    },

    {
      id: 5,
      domain: "Databases",
      technologies: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"]
    },

    {
      id: 6,
      domain: "Messaging",
      technologies: ["RabbitMQ", "kafka", "Celery"]
    },

    {
      id: 7,
      domain: "DevOps",
      technologies: ["Docker", "Kubernetes", "GitHub Actions"]
    },

    {
      id: 8,
      domain: "Cloud",
      technologies: ["AWS", "Azure"]
    },


  ]
}
