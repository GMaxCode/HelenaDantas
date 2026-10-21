// scripts/check-links.mjs
// §13 do PLANO: HEAD check em cada LinkOficial. Não bloqueia build — só alerta.
// Categoriza: ok | suspeito (4xx) | morto (5xx/erro/timeout).
// @ts-check
import { linksOficiais } from '../src/data/links.ts';

const TIMEOUT_MS = 8000;
const REDIR_LIMIT = 5;

const COLOR = {
  ok: '\x1b[32m',
  suspeito: '\x1b[33m',
  morto: '\x1b[31m',
  reset: '\x1b[0m',
};

async function check(url, maxRedirects = REDIR_LIMIT) {
  const start = Date.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'user-agent': 'helena-site-bot/1.0 (+link-check)' },
    });
    clearTimeout(timer);
    const elapsed = Date.now() - start;
    return { status: res.status, elapsed, ok: res.ok, type: res.status >= 500 ? 'morto' : res.status >= 400 ? 'suspeito' : 'ok' };
  } catch (err) {
    clearTimeout(timer);
    return { status: 0, elapsed: Date.now() - start, ok: false, type: 'morto', error: String(err.message ?? err) };
  }
}

(async () => {
  console.log(`Checando ${linksOficiais.length} links...\n`);
  let totalOk = 0;
  let totalSuspeito = 0;
  let totalMorto = 0;

  for (const link of linksOficiais) {
    if (link.disabled) {
      console.log(`⊘  ${link.id.padEnd(28)} desativado (disabled)`);
      continue;
    }
    const result = await check(link.url);
    const color = COLOR[result.type];
    console.log(
      `${color}${result.type.toUpperCase().padEnd(8)}\x1b[0m  ${String(result.status).padEnd(4)} ${link.id.padEnd(28)} ${result.elapsed}ms  ${link.url}`
    );
    if (result.type === 'ok') totalOk++;
    if (result.type === 'suspeito') totalSuspeito++;
    if (result.type === 'morto') totalMorto++;
  }

  console.log('\n');
  console.log(`${COLOR.ok}OK:${COLOR.reset} ${totalOk}   ${COLOR.suspeito}Suspeitos:${COLOR.reset} ${totalSuspeito}   ${COLOR.morto}Mortos:${COLOR.reset} ${totalMorto}`);

  if (totalMorto > 0) {
    console.log('\n⚠️  Há links mortos. Atualize src/data/links.ts ou marque disabled=true.');
    process.exit(1);
  }
})();
