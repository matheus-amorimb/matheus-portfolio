import { Component } from '@angular/core';

export type Project = {
  id: number;
  link: string;
  img: string;
  title: string;
  description: string;
  technologies: string[];
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      link: 'https://github.com/matheus-amorimb/app-easy-loan',
      img: '/assets/images/app-easy-loan.png',
      title:
        'Aplicação Full Stack desenvolvida para simular empréstimos pessoais.',
      description:
        'Plataforma dedicada à simulação de empréstimos pessoais. A aplicação oferece funcionalidades como cadastro e login de usuários, simulação de empréstimos, solicitação de empréstimos, e visualização de todos os empréstimos realizados.',
      technologies: ['Node.js', 'React', 'Vue.js', 'AWS'],
    },
    {
      id: 2,
      link: 'https://github.com/matheus-amorimb/simplified-payment-app',
      img: '/assets/images/picpay-logo.jpg',
      title: 'Plataforma de Pagamentos Simplificada usando Mensageria',
      description:
        'Aplicação back-end de uma plataforma de pagamentos simplificada que possui funcionalidades de cadastro, login, transação. Além disso, conecta-se a dois outros serviços, um de mensageria responsável por encaminhar e-mail aos clientes e outro que verifica a validade da transação.',
      technologies: [
        'NET Core',
        'PostgreSQL',
        'RabbitMQ',
        'JWT',
        'Microservices',
      ],
    },
    {
      id: 3,
      link: 'https://github.com/matheus-amorimb/python-chat-pdf',
      img: '/assets/images/llm.jpeg',
      title: 'Chatbot de PDF com LLM',
      description:
        'Este projeto demonstra o uso da biblioteca LangChain para a análise de documentos em formato PDF e a resposta a perguntas feitas pelos usuários. A aplicação web, integrada com a biblioteca Streamlit, proporciona uma experiência amigável, permitindo que os usuários enviem documentos PDF e façam perguntas para obter respostas baseadas no conteúdo dos documentos.',
      technologies: ['Python', 'LLM', 'Streamlit', 'Langchain'],
    },
    {
      id: 4,
      link: 'https://github.com/matheus-amorimb/python-amigo-secreto',
      img: '/assets/images/amigo-secreto.png',
      title: 'Sorteio Secreto com resultado enviado por WhatsApp',
      description:
        'Script que realiza o sorteio do amigo secreto e envia os resultados diretamente para o WhatsApp de cada participante.',
      technologies: ['Python', 'Selenium', 'Poetry'],
    },
  ];
}
