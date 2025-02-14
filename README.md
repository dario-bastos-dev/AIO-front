# AIO Front-end (All In One)

## 📋 Sobre o Projeto

AIO é uma aplicação web moderna que fornece uma interface elegante para autenticação e gerenciamento de usuários. O projeto foi construído com foco em performance, usabilidade e boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **TanStack Router** - Roteamento type-safe com code splitting
- **TanStack Query** - Gerenciamento de estado e cache
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Biblioteca de componentes customizáveis
- **Biome** - Linter e formatter
- **Vite** - Build tool e dev server

## 🏗️ Estrutura do Projeto

## 🔧 Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

Clone o repositório:

```bash
git clone https://github.com/dario-bastos-dev/AIO-front.git
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em [http://localhost:8080](http://localhost:8080)

## 📚 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa verificação de linting
- `npm run preview` - Visualiza build de produção localmente

## 🎨 Estilização

O projeto utiliza Tailwind CSS para estilização, com temas customizados definidos em:

- `index.css`

## 🔒 Autenticação

O sistema de autenticação é gerenciado através dos componentes:

- `form-login.tsx`
- `form-register.tsx`

## 📱 Layout Responsivo

A interface é totalmente responsiva, utilizando classes Tailwind e design system consistente através do Shadcn/UI.

## 🛠️ Ferramentas de Desenvolvimento

- **Biome** - Configurado através do `biome.json` para linting e formatação
- **Husky** - Pre-commit hooks para garantir qualidade do código
- **TypeScript** - Configuração estrita para melhor type safety

## 🔍 Ambiente de Desenvolvimento

O projeto utiliza Vite como ferramenta de build, configurado em `vite.config.ts`, oferecendo:

- Hot Module Replacement (HMR)
- Code splitting automático
- Otimização de build
- Suporte a TypeScript nativo

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.