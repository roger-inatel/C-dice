<!-- README gerado automaticamente -->

# Códice — Landing Page (React + Vite)

Este repositório contém uma landing page construída com React e Vite. O projeto foi criado a partir de um template Vite + React e inclui roteamento com `react-router-dom` e regras básicas de ESLint.

Este README explica como executar, construir e entender a estrutura do projeto, além de dicas de solução de problemas comuns observados durante o desenvolvimento.

## Sumário

- Sobre
- Pré-requisitos
- Instalação
- Scripts úteis
- Estrutura do projeto
- Problemas comuns e soluções
- Contribuição

## Sobre

Projeto frontend (landing page) em React, empacotado com Vite para desenvolvimento rápido (HMR) e build otimizado.

## Pré-requisitos

- Node.js (recomenda-se 16.x ou superior)
- npm (ou pnpm/yarn, mas os exemplos aqui usam npm)

Verifique a versão do Node com:

```powershell
node -v
```

## Instalação

Na raiz do projeto (onde está o `package.json`), execute:

```powershell
npm install
```

Para iniciar o servidor de desenvolvimento:

```powershell
npm run dev
```

O Vite irá abrir o servidor local (padrão porta 5173). Se a porta 5173 estiver em uso, o Vite tentará automaticamente outra porta (por exemplo, 5174).

Para gerar a versão de produção:

```powershell
npm run build
```

Para pré-visualizar a build localmente:

```powershell
npm run preview
```

## Scripts (do `package.json`)

- `dev` — inicia o servidor de desenvolvimento (Vite)
- `build` — gera os arquivos otimizados de produção
- `preview` — serve a build gerada para visualização local
- `lint` — executa o ESLint no projeto

Esses scripts já estão configurados no `package.json`:

```json
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"lint": "eslint .",
	"preview": "vite preview"
}
```

## Estrutura do projeto (principais arquivos)

src/
- main.jsx        — entrada do app
- App.jsx         — roteamento e layout principal
- App.css
- components/     — Header, Footer, HeroSection, ServiceCard, etc.
- pages/          — páginas: `Home.jsx`, `About.jsx`, `Contact.jsx`, `Services.jsx`, `Portifolio.jsx`

public/           — assets estáticos
vite.config.js    — configuração do Vite
package.json

Observação: o arquivo de portfólio no projeto atualmente se chama `Portifolio.jsx` (grafia em português). Se preferir padronizar para inglês (`Portfolio.jsx`), renomeie o arquivo e atualize os imports em `src/App.jsx`.

## Problemas comuns e soluções

- Erro: "Failed to resolve import './pages/Portfolio' from 'src/App.jsx'" — causa: o nome do arquivo é `Portifolio.jsx` (com 'fi') mas o import usava `Portfolio` (com 'fo'). Solução: alinhar o nome (renomear o arquivo para `Portfolio.jsx` ou ajustar o import para `Portifolio`).

- Vite tentando porta diferente: `Port 5173 is in use, trying another one...` — Isso é esperado quando a porta padrão está ocupada; o Vite tentará a próxima porta disponível (por exemplo, 5174). Se quiser forçar uma porta diferente, adicione `--port <n>`:

```powershell
npm run dev -- --port 5175
```

- Se precisar expor o servidor na rede (acesso por IP), rode:

```powershell
npm run dev -- --host
```

