import { Project } from '../models/project.model';
import { EXTERNAL_LINKS } from '../../../core/config/external-links';

export const PROJECTS: Project[] = [
  {
    title: 'Simple Pay API',
    description:
      'Desafio técnico de backend: API REST para uma plataforma de pagamentos simplificada, com transferências entre usuários e lojistas. Domínio rico encapsulando invariantes de negócio, optimistic locking para concorrência em carteiras, integração com serviços externos via OpenFeign, erros padronizados por RFC 7807 e migrações versionadas com Flyway.',
    githubUrl: EXTERNAL_LINKS.github + '/simple-pay-api',
    demoUrl: EXTERNAL_LINKS.simplePayDemo,
    techs: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'PostgreSQL' },
      { name: 'Flyway' },
      { name: 'OpenFeign' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Marginalia API',
    description:
      'API REST hipermídia (HATEOAS) de leitura social em Spring Boot 4, com segurança JWT assimétrica, rate limiting distribuído via Redis, erros padronizados por RFC 7807 e arquitetura hexagonal por módulos de domínio.',
    githubUrl: EXTERNAL_LINKS.github + '/marginalia-api',
    techs: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Spring Security' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Task Scheduler',
    description:
      'Monorepo de microsserviços Java/Spring Boot para um agendador de tarefas, organizado em um único repositório.',
    githubUrl: EXTERNAL_LINKS.github + '/task-scheduler',
    techs: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Spring Cloud OpenFeign' },
      { name: 'Spring Boot Mail' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'Docker' },
    ],
  },
];
