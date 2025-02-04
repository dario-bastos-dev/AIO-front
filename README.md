# Repositório Modelo para projetos Front-end
Modelo de arquitetura React Typescript para projetos front-end. Possui arquivos de texto falando sobre como utilizar cada pasta.

Utiliza o Tailwind para realizar os estilos e o biomejs para realizar o liting e checagem de arquivos.

Obs: Remover os arquivos .txt após clonar o repositório para evitar arquivos desnecessários no projeto e instalar um framework de  Tailwind para melhorar a estilização.

---

### Tecnologias utilizadas
- React-ts
- TanStak
- Tailwind
- biomejs
- husky
- lint-staged

---

## Configurando
1. Faça o clone do projeto:
```git clone https://github.com/dario-bastos-dev/modelo-react.git```

2. Após clonar, instale as dependências:
`` npm instal ``

3. Agora vamos iniciar o husky para gerar a pasta **.husky**, onde terá os arquivos que irão monitorar os commits feitos:
`` npm prepare ``

---

### Como utilizar o husky
Após iniciar o husky ele irá gerar uma pasta **.husky**, onde ficará os arquivos que irão monitorar os commits realizados.

Para configurar o que irá ocorrer antes do commit, vá no arquivo **pre-commit**, dentro dele adicione os comandos que serão executados. Ex:
```
echo "Running lint..."

npx lint-staged

echo "Lint finalized."

```
---

Essa arquivo está executando o **lint-staged**, que executa as verificações do **biome**, antes do commit.


## Utilizando
1. Vá no seu terminal e execute o comando para iniciar o projeto:
`` npm start ``

2. Em outra aba do terminal execute o comando do tailwind para gerar o novo arquivo e observar as alterações no projeto:
`` npm run tailwind ``

Dessa forma o tanto o React quanto o Tailwind irão ser atualizados automaticamente.