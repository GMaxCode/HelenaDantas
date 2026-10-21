# Site da Helena — Plano de implementação (versão para aprovação)

> Antes de qualquer código, este documento. Sem aprovação, nenhum arquivo é criado ou modificado além deste `PLANO.md`.

---

## 1. Objetivo

Destravar o WhatsApp da Helena como canal principal de conversão de alunos da primeira habilitação (CNH) em **Sumaré/SP e região**, e ao mesmo tempo entregar um **guia confiável** do passo a passo de primeira habilitação em SP (Detran/Poupatempo), com links oficiais sempre que possível.

Conversão principal: **botão "Falar com a Helena no WhatsApp"** em todas as páginas, sempre no mesmo número canônico `+55 19 99318-8336` (canônico = mesmo número em todos os botões, um só lugar pra editar).

---

## 2. Público-alvo

- **Primário**: pessoas em Sumaré/SP e cidades vizinhas que vão tirar a **primeira CNH (carro, categoria B)** e estão perdidas no caminho Detran/Poupatempo. Jovens (18–30) e adultos (30–55) que ainda não dirigem. Pesquisa, em geral, acontece no celular.
- **Secundário**:
  - Quem está no passo 6 do guia (já pode fazer aulas práticas) — esse é o ponto de virada para o WhatsApp.
  - Familiares de quem vai tirar a CNH (comparam cotações e confiam).

---

## 3. Páginas e seções

Site **estático**, com 3 rotas iniciais. Mais rotas só se o uso mostrar que vale (medido depois).

### `/` — Home
1. **Hero** (full-bleed): vídeo `hero ref/yegor_arts_pindown.io_1792608489.mp4` como vídeo de fundo, em loop, com overlay escuro suave (~40% de preto) pra garantir contraste do texto. Headline: **"Aprenda a dirigir em Sumaré/SP com a Helena — instrutora autônoma CNH do Brasil"**. Sub-headline: "Aulas práticas de carro para a sua primeira CNH. Você marca o ritmo; eu te levo até a prova." CTA: "Falar com a Helena no WhatsApp" (botão âncora WhatsApp).
2. **Faixa de "tipos de aula / categorias"** (logo abaixo do hero, sem repetir o vídeo): cartões horizontais com **as 5–6 placas** da pasta `fotos/plaquinhas/` — cada cartão é uma placa estilizada/cifrada com legenda curta (ex.: "Carro (CNH B)", "Aulas teóricas", "Preparação para prova prática"). As placas não são decoração aleatória: viram affordance de "trânsito real, rua real".
3. **Quem é a Helena** — bloco com a foto `fotos/foto_irmão/panfleto pro e irmão.jpeg` (Helena + Adriano), texto curto (3 parágrafos no máx.), credenciais: instrutora autônoma credenciada, sumareense, atende Sumaré e região, dá aulas para todas as idades. Tags das cidades-irmãs de Sumaré (Hortolândia, Nova Odessa, Paulínia, Americana) — bom pra SEO local.
4. **Como funcionam as aulas** — 3–5 bullets objetivos: "você define quantas aulas", "agenda pelo WhatsApp", "veículo da instrutora com direção dupla", "preparação para a prova prática do Detran", "acompanho na prova se você quiser".
5. **Prova social (alunos)** — grade responsiva com seleção curada de fotos da pasta `fotos/fotos com alunos/`. **Sem fotos sem autorização explícita da Helena**. Cada foto: alt text descrevendo "Aluno(a) [papel] com a instrutora Helena Dantas". CTA embaixo: "Quero ser o próximo".
6. **Passo a passo da primeira habilitação (SP)** — âncora para `#primeira-habilitacao` que abre os **9 passos na home**, com link também para a página dedicada `/primeira-habilitacao-sp` (caso ela cresça).
7. **FAQ** — 5–8 perguntas comuns (tem que ter aula teórica? Posso fazer com carro do pai? Quanto custa em média? Tem que ir no Poupatempo? E o exame toxicológico?).
8. **CTA final** — bloco com WhatsApp, área de atuação (Sumaré e região), botão WhatsApp.
9. **Footer** — Copyright, "Válido para o estado de São Paulo", "Última atualização: [data automática da build]", link da página `/primeira-habilitacao-sp`, link da Política de Privacidade (LGPD — ver §8).

### `/primeira-habilitacao-sp` — Página dedicada do guia
- Conteúdo **idêntico** ao da home (passos 5–6), mas com mais espaço, índice fixo lateral (desktop) e cabeçalho dedicado.
- Estrutura:
  - Título H1: "Passo a passo da primeira habilitação em São Paulo".
  - Aviso topo: **"Válido para o estado de São Paulo"** + **"Última atualização: [data]"**.
  - Lista numerada (1–9), cada passo:
    - `<h2>` com número + título.
    - Parágrafo curto de descrição.
    - Botões (sempre `<a>` estilizado como botão, nunca link solto) com:
      - Texto descritivo do destino (ex.: "Baixar no Google Play", "Iniciar processo no Detran-SP", "Falar com a Helena no WhatsApp").
      - Ícone de **link externo** (setinha para fora) em **todos** os botões externos.
      - `target="_blank"`, `rel="noopener noreferrer"`.
    - Caixas de destaque:
      - **Entre passos 5 e 6**: banner "Parabéns! Você já pode fazer suas aulas práticas."
      - **Passo 3**: destaque "Ninguém ligou? Procure o Poupatempo da sua cidade."
    - Passo 6: **botão WhatsApp da Helena em destaque** + botão "Pagar taxa da prova prática" (mesmo padrão dos outros).
  - Fechamento: parágrafo "Pronto! Agora você tem sua permissão para dirigir. Parabéns, condutor! Se quiser treinar mais para desenvolver novas habilidades, chame a Helena de volta." + botão WhatsApp.
  - Box de aviso: "Os preços (exames R$ 90 cada, valores sujeitos a alteração) e procedimentos podem mudar sem aviso. Confirme sempre no portal oficial do Detran-SP."
  - Footer com a mesma data de atualização e disclaimer.

### `/politica-de-privacidade` — LGPD (obrigatório)
- Como o site é estático e não coleta cookies nem dados, é um texto curto explicando:
  - Site institucional, sem coleta de dados via formulário.
  - O único dado trafegado é o WhatsApp (botões abrem conversa direta na conta do usuário — não passa pelo site).
  - Hospedagem pode gerar logs de IP com retenção limitada (conforme provedor).
  - Contato para dúvidas.

### Página 404
- Hero leve + "Esta página não existe. Que tal voltar para a [home](/)?"

---

## 4. Direção de design (baseada nas referências + marca)

### Conceito
**Rua, não autoescola.** A Helena já é instrutora autônoma, não peça da engrenagem tradicional de autoescola. Visual precisa mostrar isso: **sinalização urbana vivida** + **ilustração jovem** + **fotos reais de pessoas reais**. Evitar tudo que pareça autoescola tradicional (azul corporativo, esteriótipo).

### Paleta
| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#0E0E10` | Texto principal / fundos escuros |
| `--paper` | `#F7F3EC` | Off-white quente de fundo (não branco puro — combina com a textura da placa suja) |
| `--stop` | `#C8311E` | Vermelho "PARE" — alertas, urgência, destaques frios |
| `--taxi` | `#F2C14E` | Amarelo placa de advertência — CTAs, marcadores, números dos passos |
| `--gravel` | `#1B1B1F` | Cinza escuro / faixa neutra |
| `--signal` | `#2C8F4F` | Verde semáforo — sucesso (ex.: CTA WhatsApp), badges |
| `--line` | `#1B1B1F1A` | Hairlines e divisores |

Regras:
- **Nunca usar branco puro** (`#FFFFFF`) como fundo — sempre `--paper`. Texto sobre fundo escuro pode usar `--paper`.
- **Nunca usar azul corporativo** (cores do panfleto CNH do Brasil / gov) exceto como accent mínimo se virar selo do parceiro.
- O amarelo `--taxi` é reservado para **CTA principal e números dos passos**. Não pintar coisas em amarelo à toa.

### Tipografia
- **Display** (headings hero, H1, números grandes): **Anton** ou **Bebas Neue** — fontes condensadas peso-brutal, dão o "look de placa" sem virar clichê.
- **Corpo** e parágrafos: **Inter** (ou **DM Sans**) — ótima leitura em mobile, variável, brasileira vai se sentir em casa.
- **Acento** em micro-texto (label de botão, "Válido para SP", datas): **JetBrains Mono** ou **Space Mono** para remeter a "homem de placa".
- Numerais dos passos podem ser **monospaced + gigante** (fonte display), com leve textura (grit/grain sutil em SVG).

### Placas como motifs
As 5 placas viram **ícones de navegação**, não decoração pura:
- A **placa octogonal "PARE"** suja vira **botão para pausar**, **alerta**, **bullet de atenção**.
- A **placa "30 km/h"** vira ícone de **limite** (ex.: limite de caracteres, limite de aulas por semana).
- A **placa seta Y** vira ícone de **escolha** (ex.: carro vs. moto, etapas do fluxo).
- O **semáforo pixelado** vira ícone de **status** (ex.: aluno em aprovação).
- O **sticker-board "STOP"** vira tomografia de "rua vivida" — fica no hero como detalhe coadjuvante.

Aplicação: **criar 5 SVGs próprios** baseados nessas referências, com paleta alinhada (vermelho/amarelo/preto). Esses SVGs viram a identidade visual coesa do site — não usar imagens raster das plaquinhas diretamente (pesam + inconsistência visual).

### Hero (vídeo)
- Mesma fonte do `hero ref/`: `hero ref/yegor_arts_pindown.io_1792608489.mp4`.
- `<video autoplay muted loop playsinline preload="metadata" poster="...jpg">` + CSS de cobertura.
- Overlay com `--ink` em `rgba(14,14,16,0.42)` para contraste.
- Botões "Pausar vídeo" e "Tirar som" + volume off (não tem som mesmo) no canto superior.
- Fallback: poster estático (uma foto da Helena com o carro) caso o navegador/autoplay falhem.
- **Lazy invocado só a partir de ~720px de altura útil** — no mobile, hero vira poster estático com a mesma headline pra economizar bateria e dados.

### Animações sutis (não cortar)
- Entrada de hero: fade + slide-up de 600ms, easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Hover de botões: pequeno shift de 2px up + sombra dourada (200ms).
- Números dos passos ao entrar na viewport: contador de 0→9 com `transform`.
- Respeitar `prefers-reduced-motion: reduce` — desliga tudo, mantém só fade.
- Sem parallax agressivo, sem carrossel automático (prejudica quem tem deficiência visual e aos ansiosos).

### Imagery
- **Foto principal "Quem é a Helena"**: `fotos/foto_irmão/panfleto pro e irmão.jpeg`.
- **Prova social**: curadoria de ~8 fotos da pasta `fotos/fotos com alunos/`.
- **Todas as fotos em grayscale suave** num overlay de 6% preto por padrão pra fundir com a paleta, e voltam à cor ao hover (ou ao toque, no mobile via `:focus-within`).
- Ver §7 — otimização.

---

## 5. Stack recomendada

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Astro** (SSG) | Site é estático com um pouquinho de JS. SSG = páginas HTML estáticas puras, **perfeito pra SEO e pra acessibilidade**. Tiny islands só para o que precisar (menu mobile, lazy-load do vídeo). Single bundle para todo o site cabe em < 100 KB de JS. |
| Estilo | **CSS nativo com camadas (`@layer`)** + **PostCSS** + **Tailwind só se acelerar** (não obrigatório) | O projeto tem ~3 páginas. Vanilla CSS com camadas (`reset`, `tokens`, `components`, `utilities`) é legível e tiny. Tailwind entra só se ficar mais claro. *Decisão: começar sem Tailwind, adicionar só se doer.* |
| Tipografia | `@fontsource-variable` via npm ou Google Fonts com `font-display: swap` | Performance e zero FOUT grosseiro. |
| JS | Astro islands (Svelte se necessário, ou vanilla) | Quase nenhum JS. Counter, menu, video-controls, lazy-load. |
| Conteúdo | **Markdown + frontmatter** por página, e **TS data module** para o passo a passo | Conteúdo fica editável sem mexer no layout. Um arquivo: `src/data/passos.ts` — fácil de manter. |
| Hospedagem | **Cloudflare Pages** (recomendado) ou Vercel ou Netlify | Site estático global, HTTPS grátis, formulário/contato sem backend. Cloudflare tem CDN + DNS rápidos no Brasil. *Decisão: Cloudflare Pages.* |
| CI/deploy | Git push → preview + prod | Cada PR gera preview URL. |
| Analytics | **Plausible Cloud (pago)** ou **Umami self-hosted** | LGPD-friendly, sem cookies, leve. Recomendo Plausible self-host? Não, Plausible Cloud já tá em conformidade. Pendente para v1 — pode começar sem analytics e adicionar depois. |
| Imagens | Astro `<Image>` (usa Sharp) gera WebP/AVIF | Vários tamanhos responsivos a partir do mesmo JPG. |
| Vídeo | Múltiplas resoluções disponíveis? Não. **Só otimizar a que tem (170KB, ~720p)**. | Autoplay só acima de 720px. Mobile recebe poster. |

### Alternativas descartadas
- **Next.js**: overkill pra um site desse tamanho; ship JS maior, sem ganho real.
- **Next + CMS headless**: a Helena não vai editar em CMS. Mais simples = melhor.
- **WordPress**: segurança, manutenção e hosting pesam.
- **Site 100% HTML estático sem framework**: dá pra fazer, mas perderíamos o pipeline de imagens responsivas, mdx e tipografia como pacote.

---

## 6. SEO local

Alvo: **"aulas práticas de direção Sumaré"**, **"instrutora de direção Sumaré"**, **"instrutor autônomo CNH Sumaré"** e variações com cidades próximas.

### Onde aplicar
- **Title**: `Helena Dantas — Instrutora autônoma de direção em Sumaré/SP | Aulas práticas de CNH`
- **Meta description**: ~155 chars, inclui WhatsApp e CTA.
- **`<h1>` único por página** (ver §7 — acessibilidade).
- **Structured data JSON-LD** (em Home e `/primeira-habilitacao-sp`):
  - `LocalBusiness` com `name`, `areaServed` (Sumaré + cidades próximas), `telephone`, `url`, `priceRange`.
  - `Person` schema para a Helena (instrutora credenciada).
- **Open Graph + Twitter card** com imagem (a foto dela com o carro).
- **Sitemap.xml** + **robots.txt** gerados no build.
- **Canonical URLs** para evitar conteúdo duplicado.
- **`Válido para o estado de São Paulo`** e `Última atualização` também no rodapé do JSON-LD LocalBusiness (`areaServed`).

### Localização
- Cidade, bairro (Sumaré), DDD 19, número de WhatsApp em texto visível.
- Cidades vizinhas citadas na copy (Hortolândia, Nova Odessa, Paulínia, Americana, Monte Mor) — bom pra geolocalização contextual.

---

## 7. Acessibilidade (não cortar)

- **Contraste mínimo** WCAG AA (4.5:1 texto, 3:1 componentes).
- **HTML semântico**: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`. Um `<h1>` por página, hierarquia sem pular nível.
- **Skip link** "Pular para o conteúdo" no topo (visible on focus).
- **Foco visível** em todos os interativos (outline `--taxi` 3px offset 2px).
- **Botões com tamanho mínimo 44×44px** (Apple HIG + WCAG 2.5.5).
- **Vídeo do hero**: `aria-hidden` quando decorativo + `autoplay`, sem áudio. Versão alternativa só-imagem para `prefers-reduced-motion`.
- **Formulários**: não existem na v1. Tudo via WhatsApp.
- **Contraste da paleta**:
  - `--ink` em `--paper` = 17:1 ✔
  - `--taxi` em `--ink` = 9:1 ✔ (CTA amarelo em preto fica grande, sem mistério)
  - `--stop` em `--paper` = 4.6:1 ✔
- **Idioma**: `<html lang="pt-BR">`.
- **Testes**: Lighthouse a11y ≥ 95, axe DevTools sem violações críticas, leitor de tela (NVDA/VoiceOver) faz a navegação completa sem quebra.

---

## 8. Mobile-first

- **Breakpoints** (mobile-first com `min-width`):
  - `>=640` sm | `>=768` md | `>=1024` lg | `>=1280` xl.
- **Hero em mobile**: poster estático no lugar do vídeo (autoplay desativado em `prefers-reduced-motion` E em conexões lentas via `navigator.connection.saveData`).
- **Botão WhatsApp flutuante** sempre visível no mobile a partir do segundo scroll (não no topo, pra não atrapalhar a leitura).
- **Tipo base**: 17px no mobile, 18px desktop.
- **Container**: 16px gutter no mobile, 24px no tablet, 32px no desktop.
- **Tabela e tabelas-like**: tudo vira lista vertical no mobile (não usado na v1, mas regra).
- **FAQ**: detalhes/summary nativos HTML (zero JS).
- **Mapa**: se entrar Google/embed do Maps, usar lazy-load + placeholder estático até interação.

---

## 9. Otimização das fotos

- Pipeline via Astro `<Image>`:
  - Gera **WebP** (JPEG fallback) em 480/640/960/1280/1920px.
  - **AVIF** quando suportado.
  - `loading="lazy"` por padrão (exceto foto acima-da-do hero).
  - `decoding="async"`.
  - `fetchpriority="high"` só na imagem LCP.
- **DPI**: usar `density: 2` apenas na LCP (visível quando retina).
- **Alt text** descritivo em todas as fotos — preparado no momento da publicação.
- **Compressão**: Sharp quality 78 (WebP). Mamãe e papai da LCP são pesados (~1 MB sem processar) — processamento sai junto com o build.
- **Vídeo**: rodar `ffmpeg` uma vez pra comprimir (se ficar grande demais): H.264 crf 28, sem áudio, max 720p. Se o tamanho ficar > 1 MB, vira poster-only no mobile.
- **Conversão**: rodar build, medir LCP com Lighthouse mobile 4G, alvo ≤ 2,5 s.

---

## 10. Segurança

- **HTTPS forçado** (HSTS) — Cloudflare Pages faz nativamente.
- **CSP restritiva** via `meta http-equiv`/`headers`. Apenas assets locais + WhatsApp API + Google Fonts (quando carregando).
- **Sem cookies**, **sem localStorage**, **sem analytics com identificação pessoal** (LGPD-safe).
- **Sem JavaScript de terceiros** além dos opcionais (Plausible self-hosted é single-domain).
- **Atualização de dependências**: dependabot/Snyk em CI (gem depende de Cloudflare Pages — vem de brinde).
- **`rel="noopener noreferrer"`** em todo `target="_blank"`.
- **Sem formulários** → sem injeção de input. Sem banco de dados.
- **404/500**: páginas amigáveis + log no provedor.

---

## 11. Hospedagem & deploy

- **Cloudflare Pages** (Free tier serve bem):
  - Build: `astro build`, output em `/dist`.
  - Domain (a confirmar): `helenadantas.com.br` ou similar. Cloudflare registrar + DNS.
  - Branch `main` = produção. Cada PR abre preview.
- **Domínio**: registrar via Cloudflare Registrar ou Registro.br. Recomendação: `.com.br`.
- **E-mail da Helena** (se houver): configurar redirecionamento pro Gmail dela.
- **HTTPS**: Let's Encrypt via Cloudflare, auto-renova.
- **Backup**: Git é o backup. Conteúdo mora em `src/data`.

---

## 12. Estrutura de arquivos (esboço)

```
/
├── PLANO.md                  ← este arquivo
├── README.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── fonts/
│   ├── icons/                ← SVGs das 5 placas
│   └── videos/hero.mp4        ← cópia do hero ref
├── src/
│   ├── assets/
│   │   └── photos/
│   │       ├── irmaos.jpeg    ← foto principal
│   │       └── alunos/        ← curadoria prova social
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Passos.astro
│   │   ├── WppButton.astro
│   │   ├── FAQ.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── passos.ts          ← ÚNICO arquivo para o passo a passo
│   │   └── site.ts            ← nome, whatsapp, areas, links
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── primeira-habilitacao-sp.astro
│   │   └── politica-de-privacidade.astro
│   └── styles/
│       ├── tokens.css
│       ├── reset.css
│       └── global.css
```

### Conteúdo editável em um único arquivo (requisito da Helena)

`src/data/passos.ts` — formato:

```ts
// src/data/passos.ts
export type Botao = {
  texto: string;
  href?: string;            // vazio/indefinido = botão desativado
  externo?: boolean;
  variantes?: ('cta-wpp' | 'cta-default' | 'cta-soft')[];
};

export type Passo = {
  numero: number;
  titulo: string;
  descricao: string;
  botoes: Botao[];
  destaque?: string;        // caixa amarela de atenção
};

export const passos: Passo[] = [
  {
    numero: 1,
    titulo: 'Curso teórico no app CNH do Brasil',
    descricao: 'Baixe o app CNH do Brasil... [texto]',
    botoes: [
      { texto: 'Baixar no Google Play', href: 'https://play.google.com/store/apps/details?id=br.gov.serpro.cnhe&hl=pt_BR', externo: true, variantes: ['cta-default'] },
      { texto: 'Baixar na App Store',   href: 'https://apps.apple.com/br/app/cnh-do-brasil/id1275057217',      externo: true, variantes: ['cta-default'] },
    ],
  },
  // ... passos 2–9
];

export const whatsappUrlBase = 'https://wa.me/5519993188336';
export function linkWhatsApp(mensagem: string) {
  return `${whatsappUrlBase}?text=${encodeURIComponent(mensagem)}`;
}
```

`src/data/site.ts` separa números/mensagens (inclui `ultimaAtualizacao` calculada no build):
```ts
export const site = {
  nome: 'Helena Dantas',
  whatsapp: '+55 19 99318-8336',
  whatsappLink: 'https://wa.me/5519993188336',
  regiao: ['Sumaré', 'Hortolândia', 'Nova Odessa', 'Paulínia', 'Americana', 'Monte Mor'],
  // ...
};
```

Toda página importa daqui. Editar um passo = mudar **uma linha do array**, sem tocar em layout.

### Regra dos botões
Cada botão tem `href`. Se `href` for `null`, **`undefined`** ou string vazia → botão renderiza **desativado**, cinza, `aria-disabled`, sem `href`. **Nunca** deixamos botão clicável apontando pra `#` ou `'#pendente'`. Texto fallback nesses casos: **"Em breve"** (aviso: "Link temporariamente indisponível").

---

## 13. Manutenção dos links oficiais ao longo do tempo

Pendência crítica: **links do Detran/Poupatempo/Sefaz mudam sem aviso**. Plano:

1. **Inventário centralizado** dos links externos (em `src/data/links.ts`):
   ```ts
   export const linksOficiais = {
     cnhBrasil_google: { url: 'https://play.google.com/store/apps/details?id=br.gov.serpro.cnhe',         label: 'Google Play', destino: 'CNH do Brasil — Google Play' },
     cnhBrasil_apple:  { url: 'https://apps.apple.com/br/app/cnh-do-brasil/id1275057217',                  label: 'App Store',   destino: 'CNH do Brasil — App Store' },
     detran_primeira:  { url: '...detran.sp.gov.br..._iniciar_processo_primeira_habilitacao...',           label: 'Detran-SP',   destino: 'Iniciar processo Detran-SP' },
     // ...
   };
   ```
2. **Lint/script de checagem** (`scripts/check-links.mjs`):
   - Roda `fetch HEAD` em cada um, com timeout 8s, considera `2xx/3xx` OK, `4xx/5xx`/timeout/error = alerta.
   - Categoriza: `ok` | `suspeito` (4xx) | `morto` (5xx/erro).
   - Para alerta: **apenas alerta, não bloqueia** o site. O site continua no ar; o link no `src/data` fica com flag `disabled: true` na próxima atualização (ou você atualiza manualmente).
3. **Cron de checagem** (GitHub Actions):
   - Toda segunda às 09h00 (BR), roda `node scripts/check-links.mjs`.
   - Cria/atualiza **issue automaticamente** na repo listando links quebrados + página do plano (`/pendencias-links`) marcada para revisão.
   - **Reminder check**: depois de 7 dias sem fix, manda notificação.
4. **Rota `/pendencias-links`** (status pública):
   - Mostra um cartão por link oficial com nome, destino, status atual (`OK` / `Suspeito` / `Indisponível`), última checagem.
   - É pública porque é institucional e mostra cuidado com o aluno. **Não** expõe stack trace nem dados sensíveis.
   - Site normalmente nunca mostra essa rota no menu; fica como `/pendencias-links` para SEO técnico + auditoria manual.
5. **Política de publicável**:
   - Se um link cair, **botão vira cinza com "Em breve"**. Texto da página editada para isso continua coerente.
   - **Sumiço do link nunca leva para o botão sumir**: manter o CTA é pedagógico pro aluno entender que o passo ainda existe, só o link caiu.
6. **Notificação da Helena**: webhook (opcional) alertando no WhatsApp dela quando algum link quebrar. Pendente — decidir depois.

---

## 14. Critérios de aceite (antes de publicar)

1. ✅ **Build local** roda sem erros nem warnings.
2. ✅ **Lighthouse mobile (4G slow, Moto G4)** em todas as rotas:
   - Performance ≥ 90.
   - Accessibility ≥ 95.
   - Best Practices ≥ 95.
   - SEO ≥ 95.
3. ✅ **Lighthouse desktop**: tudo igual ou superior.
4. ✅ **axe DevTools** em todas as rotas: 0 violações críticas.
5. ✅ **Leitor de tela** (VoiceOver ou NVDA): navegação completa em todas as páginas sem quebra de leitura, headings na ordem, botões com nomes claros.
6. ✅ **Keyboard-only**: navegação completa sem mouse, foco visível.
7. ✅ **Visual**: print em 320px, 768px, 1024px, 1440px — sem overflow horizontal, sem sobreposição.
8. ✅ **Mobile iOS**: teste em Safari iOS 17 (autoplay-policy). Hero se comporta (vídeo ou fallback).
9. ✅ **Conteúdo do passo a passo**: o botão do passo 6 leva pro WhatsApp com mensagem pré-pronta. Botões do passo 1 abrem nas lojas.
10. ✅ **Todos os `target="_blank"`** com `rel="noopener noreferrer"`.
11. ✅ **404**: rota custom serve página amigável.
12. ✅ **Sitemap + robots** prontos e acessíveis.
13. ✅ **JSON-LD** valida no [Schema.org Validator](https://validator.schema.org/).
14. ✅ **Links oficiais**: checagem local (`scripts/check-links.mjs`) passa em 100%.
15. ✅ **Critérios de pendência**: `PLANO.md` checado contra perguntas respondidas — todos os links confirmados ou desativados.

---

## 15. Pendências (registradas — PLANO.md vira o histórico)

> Tudo abaixo fica neste arquivo até virar item fechado. A Helena fica sabendo do estado de cada um só olhando esta seção.

- **(a) Confirmar com a Helena o valor dos exames (R$ 90) e a Resolução Contran 1020/25 (passos 3 e 7)**.
  - Estado: publicável com **R$ 90 por exame (valor sujeito a alteração)** e texto "veículo do aluno precisa atender à Resolução 1020/25 do Contran"; marca esse item como "revisão periódica".
  - Ação: confirmar com a Helena na próxima conversa; atualizar `passos.ts`.
- **(b) URLs oficiais do app "CNH do Brasil" — Google Play e App Store (passo 1)**.
  - Estado: ✅ confirmado pela Helena nesta conversa (urls acima). Botões ativos.
- **(c) Número de WhatsApp da Helena**.
  - Estado: ✅ confirmado — `+55 19 99318-8336`. CTA principal ativo.
- **(d) Outros links oficiais (Detran/SP, Poupatempo, Sefaz-SP, pixveiculos.fazenda.sp.gov.br)**.
  - Estado: catalogados em `src/data/links.ts`. Validados no CI por checagem semanal.
  - Se algum link oficial mudar, o site **desativa o botão automaticamente** + Helena recebe ping.

---

## 16. Próximo passo

Após sua aprovação:
1. Subir o repositório (este projeto) com `astro.config.mjs`, `src/`, `PLANO.md`, README.
2. Colocar os arquivos visuais em `public/videos/`, `public/icons/`, `src/assets/photos/`.
3. Implementar `src/data/passos.ts` e `src/data/site.ts` primeiro (provam que a estrutura aguenta).
4. Layout → componentes → páginas.
5. CI: `scripts/check-links.mjs` em GitHub Actions.
6. Deploy Cloudflare Pages + domínio.
7. Critérios de aceite + ajustes finos.

**Nada disso começa antes do "aprovado" seu.**
