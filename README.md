# backend-descomplica

### Ferramentas utilizadas ✨⚙🛠

<hr>
<div style="display: inline_block"><br>
  <img align="center" alt="Ivan-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Ivan-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="Ivan-NodeJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Ivan-GraphQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg">
  <img align="center" alt="Ivan-Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg">
  <img align="center" alt="Ivan-Docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg">
</div>

### Como rodar a aplicação 🚀🔥

<hr>

Primeiro de tudo devemos instalar todas as dependências utilizando

```
yarn
```

ou

```
npm
```

Após instalar as depências devemos rodar o seguinte comando, que irá ser responsável por subir um container que terá o banco de dados que iremos utilizar

```
yarn docker:up
```

ou

```
npm run docker:up
```

Agora que temos o nosso banco, podemos rodar o comando que será responsável por criar as migrations(tabelas) do nosso banco

```
yarn migrations:create
```

ou

```
npm run migrations:create
```

Com tudo pronto podemos finalmente rodar a nossa aplicação sem problemas, basta utilizar o código abaixo

```
yarn dev
```

ou

```
npm run dev
```

![image](https://user-images.githubusercontent.com/62350674/184053305-51d8e98b-a806-450c-a1fb-1b12d6346ca7.png)
