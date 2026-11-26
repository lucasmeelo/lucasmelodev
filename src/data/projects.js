import dashboardPreview from '../assets/dashboard-preview.png';

export const featuredProject = {
  title: 'Dashboard — Gestão & Fluxo Operacional',
  subtitle: 'DESKTOP APPLICATION // ELECTRON + REACT + TYPESCRIPT',
  description:
    'Aplicação desktop desenvolvida para controle de faturamento mensal, acompanhamento de pedidos em quadro Kanban interativo e exportação direta de relatórios em PDF.',
  image: dashboardPreview,
  stack: ['Electron', 'React', 'TypeScript', 'Tailwind CSS'],
  howItWasBuilt: [
    {
      step: '01',
      title: 'Interface Reativa & Tipada',
      text: 'Toda a estrutura de componentes, estados de pedidos e cálculos financeiros foi escrita em TypeScript com React para garantir previsibilidade e manutenção limpa.'
    },
    {
      step: '02',
      title: 'Fluxo Kanban & Métricas',
      text: 'Movimentação direta de pedidos entre Pendente, Em Produção e Entregue com atualização automática dos indicadores de faturamento mensal, valores a receber e entregas.'
    },
    {
      step: '03',
      title: 'Janela Customizada & Relatórios PDF',
      text: 'Barra superior frameless personalizada com filtro por mês, busca rápida, seção de anotações e exportação de relatórios em .pdf.'
    }
  ],
  tools: [
    {
      name: 'Electron',
      detail: 'Base desktop multiplataforma, janela frameless customizada, controles nativos e geração de relatórios em PDF.'
    },
    {
      name: 'React + TypeScript',
      detail: 'Arquitetura de componentes reutilizáveis, tipagem estrita das entidades e gerenciamento dinâmico do quadro Kanban.'
    },
    {
      name: 'Tailwind CSS',
      detail: 'Design system escuro de alto contraste com hierarquia visual clara entre KPIs, navegação lateral e colunas de produção.'
    }
  ]
};

export const githubProjects = [
  {
    name: 'Simple QR Generator',
    tag: 'Simple QR Generator',
    description:
      'QR Code generator built with Java, Swing, Maven, and ZXing.',
    stack: ['Java'],
    repo: 'https://github.com/lucasmeelo/simple-qr-generator'
  },
  {
    name: 'YouTube Download',
    tag: 'YouTube Download',
    description:
      'A simple Python CLI tool to download youtube videos in mp4, mp3, or webm using yt-dlp.',
    stack: ['Python'],
    repo: 'https://github.com/lucasmeelo/youtube-download'
  }
];