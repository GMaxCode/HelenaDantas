# Site da Helena

Site institucional estático da Helena Dantas — instrutora autônoma de direção em Sumaré/SP. Site sem backend, sem coleta de dados, sem cookies.

## Stack

- **[Astro](https://astro.build/)** (SSG)
- CSS nativo com `@layer`
- Fontes via `@fontsource-variable` (self-hosted, sem Google Fonts no runtime)
- Hospedagem prevista: **Cloudflare Pages**

## Estrutura

```
src/
├── assets/          Fotos e mídias (otimizadas no build)
├── components/      Componentes Astro (Hero, WppButton, Passos, ...)
├── data/            Conteúdo editável em um arquivo só
│   ├── site.ts
│   ├── passos.ts
│   └── links.ts
├── layouts/         Layouts compartilhados
├── pages/           Rotas (/, /primeira-habilitacao-sp, /politica-de-privacidade)
└── styles/          CSS em camadas (tokens, reset, global)
```

## Onde mexer

| Pra mudar... | Edita... |
|---|---|
| Número de WhatsApp | `src/data/site.ts` |
| Texto/copy dos 9 passos | `src/data/passos.ts` |
| Links oficiais (Detran, lojas, etc.) | `src/data/links.ts` |
| Cores da paleta | `src/styles/tokens.css` |
| Páginas | `src/pages/*.astro` |

## Scripts

```bash
npm install       # instala dependências
npm run dev       # dev server em http://localhost:4321
npm run build     # build de produção → ./dist
npm run preview   # serve o ./dist localmente
```

## Planejamento

Veja [`PLANO.md`](./PLANO.md) para o plano de implementação completo, pendências e critérios de aceite.
