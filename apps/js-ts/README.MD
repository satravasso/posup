# @posup/js-ts

A aplicação utiliza 2 bibliotecas também feita para a matéria chamada **@posup/lol-server-status** e **@posup/soixa** que estão na pasta `packages` nesse monorepo.

## ⚙️ Requisitos

Para rodar o projeto é necessário ter instalado:

[Node.js](https://nodejs.org/en/)
[Yarn](https://yarnpkg.com/)

E ter uma chave de API no [portal de desenvolvimento da Riot Games](https://developer.riotgames.com/).

## ⚛️ Desenvolvendo

1. Crie um arquivo `.env` com a sua chave de api da Riot com o nome `RIOT_API_KEY`
2. Após instalar os pacotes na workspace, rode `yarn dev` pa nasta `apps/js-ts`
3. Para realizar os testes execute `yarn test` na raíz do projeto.

## 📝 Documentação

A aplicação é apenas um ponto inicial sumulando um projeto javascript que utilizam as bibliotecas feitas para o trabalho da matéria "Desenvolvimento em Javascript e Typescript".
O meu objetivo de fazer nessa arquitetura de pacotes é para usar o `@posup/lol-server-status` na minha aplicação pessoal [5Pots](https://git.io/5pots).
