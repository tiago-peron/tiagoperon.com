import { environment } from '../../../environments/environment';

// Se mudar aqui, atualizar também em src/index.html (canonical, og:url, JSON-LD sameAs)
export const EXTERNAL_LINKS = {
  email: 'tperons@gmail.com',
  github: 'https://github.com/tiago-peron',
  linkedin: 'https://linkedin.com/in/tiago-peron',
  cvUrl: '/curriculo.pdf',
  imageUrl: '/tiago-peron.jpg',
  siteUrl: environment.siteUrl,

  simplePayDemo: 'https://simplepay.tiagoperon.com/docs.html',
} as const;
