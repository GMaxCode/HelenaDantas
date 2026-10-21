// src/data/links.ts
// INVENTÁRIO CENTRALIZADO DE LINKS OFICIAIS.
// Edite aqui pra atualizar Detran/Poupatempo/lojas/etc. sem mexer em layout.
// Quando um link cair, set `disabled: true` no item — o componente WppButton
// renderiza "Em breve" cinza (regra §12).

export type LinkOficial = {
  /** Identificador curto, único neste arquivo. */
  id: string;
  /** Texto visível no botão. */
  label: string;
  /** Para onde vai (subtítulo/meta, não visível no botão). */
  destino: string;
  /** URL canônica. */
  url: string;
  /** Se true, é link externo (target=_blank + rel=noopener noreferrer + ícone). */
  externo?: boolean;
  /** Flag de desativação manual (link morto ou pendente). */
  disabled?: boolean;
  /** Última checagem humana (ISO date). Atualizar quando validar. */
  verificadoEm?: string;
};

export const linksOficiais: LinkOficial[] = [
  {
    id: 'cnhBrasil_google',
    label: 'Baixar no Google Play',
    destino: 'App CNH do Brasil — Google Play',
    url: 'https://play.google.com/store/apps/details?id=br.gov.serpro.cnhe&hl=pt_BR',
    externo: true,
    verificadoEm: '2026-10-21',
  },
  {
    id: 'cnhBrasil_apple',
    label: 'Baixar na App Store',
    destino: 'App CNH do Brasil — App Store',
    url: 'https://apps.apple.com/br/app/cnh-do-brasil/id1275057217',
    externo: true,
    verificadoEm: '2026-10-21',
  },
  // Itens abaixo: URLs a confirmar antes da publicação (links podem mudar sem aviso).
  // Mantidos com `disabled: true` por padrão até validação.
  {
    id: 'detran_primeira',
    label: 'Iniciar processo no Detran-SP',
    destino: 'Detran-SP — Primeira habilitação',
    url: 'https://www.detran.sp.gov.br/',
    externo: true,
    disabled: true,
  },
  {
    id: 'detran_agendamento',
    label: 'Agendar coleta biométrica no Poupatempo',
    destino: 'Poupatempo — Agendamento',
    url: 'https://www.poupatempo.sp.gov.br/',
    externo: true,
    disabled: true,
  },
  {
    id: 'detran_exame_toxicologico',
    label: 'Onde fazer o exame toxicológico',
    destino: 'Exame toxicológico — DENATRAN',
    url: 'https://www.gov.br/denatran/pt-br',
    externo: true,
    disabled: true,
  },
  {
    id: 'detran_taxa_prova',
    label: 'Pagar taxa da prova prática',
    destino: 'Detran-SP — Taxas',
    url: 'https://www.detran.sp.gov.br/',
    externo: true,
    disabled: true,
  },
];

/** Lookup por id pra uso nos componentes. */
export function getLink(id: string): LinkOficial | undefined {
  return linksOficiais.find((l) => l.id === id);
}
