// src/pages/robots.txt.ts
// Gera /robots.txt no build (Astro endpoint estático).
export const GET = () => {
  const body = `User-agent: *
Allow: /

Sitemap: https://helenadantas.com.br/sitemap-index.xml
`;
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
