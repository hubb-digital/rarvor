# RARVOR Strategy House

Site institucional completo da RARVOR, preparado para GitHub e Vercel.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- App Router

## Rodar localmente

Requisitos: Node.js 22 e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Publicar pelo GitHub + Vercel

1. Crie um repositório vazio no GitHub.
2. Envie todo o conteúdo desta pasta para a branch `main`.
3. Na Vercel, selecione **Add New > Project**.
4. Importe o repositório do GitHub.
5. A Vercel reconhecerá o projeto como Next.js. Não altere os comandos de build.
6. Em **Environment Variables**, crie `NEXT_PUBLIC_SITE_URL` com a URL final do site, sem barra no final.
7. Clique em **Deploy**.

Cada novo `git push` na branch `main` publicará uma nova versão automaticamente.

## Domínio

Depois do primeiro deploy, acesse **Project Settings > Domains** na Vercel e adicione o domínio oficial. Atualize `NEXT_PUBLIC_SITE_URL` para esse mesmo endereço e faça um novo deploy.

## Estrutura principal

- `app/`: páginas, componentes, conteúdo e SEO.
- `public/brand/`: identidade visual e símbolos da RARVOR.
- `public/`: arquivos públicos, favicon e recursos de marca.
- `app/site-content.ts`: textos, cases, FAQ e dados institucionais.
- `app/contact.ts`: número e mensagem padrão do WhatsApp.

## Contato do site

Os botões comerciais direcionam para o WhatsApp `+55 21 97824-7667`. Para alterar o número ou a mensagem inicial, edite `app/contact.ts`.

## Verificação antes de publicar

```bash
npm run build
```

O deploy só deve ser feito quando o comando terminar sem erros.
