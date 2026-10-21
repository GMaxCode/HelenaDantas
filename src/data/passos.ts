// src/data/passos.ts
// ÚNICO ARQUIVO com o conteúdo do passo a passo de primeira habilitação em SP.
// Regra §12: botão com href vazio/undefined → renderiza desativado com "Em breve".
// Texto abaixo é RASCUNHO pra revisão da Helena antes de ir pro ar.

import { linkWhatsApp, site } from './site';

export type VarianteBotao = 'cta-wpp' | 'cta-default' | 'cta-soft' | 'cta-store';

export type Botao = {
  /** Texto visível. */
  texto: string;
  /** href destino. Ausente/vazio → botão desativado. */
  href?: string;
  /** Se true (e href presente), vira link externo (target=_blank + rel + ícone). */
  externo?: boolean;
  /** Variantes visuais (ordem importa: 1ª = modificador principal). */
  variantes?: VarianteBotao[];
  /** aria-label extra para acessibilidade. */
  ariaLabel?: string;
};

export type Passo = {
  numero: number;
  titulo: string;
  descricao: string;
  botoes: Botao[];
  /** Caixa amarela de atenção (passos 3 e 5–6). */
  destaque?: string;
};

export const passos: Passo[] = [
  {
    numero: 1,
    titulo: 'Curso teórico no app CNH do Brasil',
    descricao:
      'Baixe o app oficial CNH do Brasil (Serpro) e faça o curso teórico online — totalmente gratuito, no celular. São cerca de 45 horas/aula espalhadas por módulos curtos com prova final.',
    botoes: [
      {
        texto: 'Baixar no Google Play',
        href: 'https://play.google.com/store/apps/details?id=br.gov.serpro.cnhe&hl=pt_BR',
        externo: true,
        variantes: ['cta-store'],
      },
      {
        texto: 'Baixar na App Store',
        href: 'https://apps.apple.com/br/app/cnh-do-brasil/id1275057217',
        externo: true,
        variantes: ['cta-store'],
      },
    ],
  },
  {
    numero: 2,
    titulo: 'Prova teórica do Detran',
    descricao:
      'Após concluir o curso, marque a prova teórica no próprio app. São 30 questões de múltipla escolha — precisa acertar pelo menos 21.',
    botoes: [],
  },
  {
    numero: 3,
    titulo: 'Coleta biométrica + agendamento no Poupatempo',
    descricao:
      'Aprovado na teórica, o Detran chama você para a coleta biométrica (foto, digitais e assinatura). É sempre no Poupatempo da sua cidade.',
    destaque:
      'Ninguém te ligou em até 30 dias? Procure o Poupatempo da sua cidade com seu RG e CPF em mãos.',
    botoes: [],
  },
  {
    numero: 4,
    titulo: 'Exame médico + exame toxicológico',
    descricao:
      'Você faz o exame médico (vista, audição, psicotécnico) em clínicas credenciadas. O toxicológico é obrigatório desde 2016 para categorias C, D e E — para CNH B vale conferir se a categoria de destino exige.',
    botoes: [],
  },
  {
    numero: 5,
    titulo: 'Liberação para aulas práticas',
    descricao:
      'Depois da aprovação no exame médico, você é liberado para as aulas práticas de direção. Esse é o ponto de virada — e é aqui que a Helena entra.',
    destaque: 'Parabéns! Você já pode fazer suas aulas práticas.',
    botoes: [
      {
        texto: 'Falar com a Helena no WhatsApp',
        href: linkWhatsApp(site.whatsappMensagemPadrao),
        externo: true,
        variantes: ['cta-wpp'],
        ariaLabel: 'Abrir conversa no WhatsApp com a Helena Dantas',
      },
    ],
  },
  {
    numero: 6,
    titulo: 'Aulas práticas com a Helena',
    descricao:
      'Você define quantas aulas quer fazer. O carro é da Helena (com direção dupla), e o ritmo é o seu. As aulas acontecem em Sumaré e região — rua de verdade, trânsito de verdade.',
    botoes: [
      {
        texto: 'Falar com a Helena no WhatsApp',
        href: linkWhatsApp(site.whatsappMensagemPadrao),
        externo: true,
        variantes: ['cta-wpp'],
        ariaLabel: 'Abrir conversa no WhatsApp com a Helena Dantas',
      },
      {
        texto: 'Pagar taxa da prova prática',
        href: undefined,
        variantes: ['cta-default'],
      },
    ],
  },
  {
    numero: 7,
    titulo: 'Marcar e fazer a prova prática',
    descricao:
      'Quando você e a Helena acharem que tá na hora, agendamos a prova prática no Detran. Custo de cada exame: R$ 90 (valor sujeito a alteração — confirme no portal do Detran-SP).',
    destaque:
      'Veículo do aluno (se for usar) precisa atender à Resolução Contran 1020/25. Com a Helena, você dirige o carro dela — sem preocupação.',
    botoes: [
      {
        texto: 'Falar com a Helena no WhatsApp',
        href: linkWhatsApp(site.whatsappMensagemPadrao),
        externo: true,
        variantes: ['cta-wpp'],
      },
    ],
  },
  {
    numero: 8,
    titulo: 'Aprovação e emissão da CNH',
    descricao:
      'Aprovado na prática, o Detran emite a sua Permissão para Dirigir (PPD) — válida por 12 meses. Depois desse período, ela vira a CNH definitiva automaticamente.',
    botoes: [],
  },
  {
    numero: 9,
    titulo: 'Acompanhamento opcional na prova',
    descricao:
      'Se você quiser, a Helena te acompanha no dia da prova prática — é só combinar antes pelo WhatsApp. A presença da instrutora não garante aprovação, mas ajuda a entrar mais calmo.',
    botoes: [
      {
        texto: 'Falar com a Helena no WhatsApp',
        href: linkWhatsApp(site.whatsappMensagemPadrao),
        externo: true,
        variantes: ['cta-wpp'],
      },
    ],
  },
];

export const mensagemFinal =
  'Pronto! Agora você tem sua permissão para dirigir. Parabéns, condutor! Se quiser treinar mais para desenvolver novas habilidades, chame a Helena de volta.';
