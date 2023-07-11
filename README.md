<h1> API Hamburgueria :hamburger: </h1>
<br>

<h2> Este foi o projeto que aprendi no curso do DevClub </h2>
<p> Aplicação para cadastro de pedidos de uma hamburgueria. Projeto prático para aprimorar os conceitos do módulo "Iniciando no Node" e criar uma API REST, com base no escopo já definido de tarefas. </p>

<h2> Introdução </h2>
<p> Usar Node.JS e Express para criar uma API que executa operações CRUD nos pedidos. </p>

<h2> Ferramentas </h2>
<p> Para a aplicação foi utilizado o Node.JS < <a>https://nodejs.org/en/download</a> > na versão 18.14.0 em LTS </p>
<p> NPM veio na instalação do Node.JS < <a>https://www.npmjs.com/</a> > na versão 9.3.1 </p>
<p> Foi usado o programa Insomnia < <a>https://insomnia.rest/download</a> > para testar as requisições das rotas simulando o Front-end. </p>

<h2> Dependências </h2>
<p> Framework Express - versão 4.18.2 </p>
<p> $ npm install express </p>
<p> Documentação: < <a>https://www.npmjs.com/package/express</a> > </p>
<br>
<p> Biblioteca uuid - versão 9.0.0 </p>
<p> $ npm install uuid </p>
<p> Função do tipo v.4 </p>
<p> Documentação: < <a>https://www.npmjs.com/package/uuidv4</a> > </p>

<h2> Dependência de desenvolvimento </h2>
<p> Nodemon - versão 2.0.22 </p>
<p> $ npm install nodemon </p>
<p> Foi criado um script ao package.json para o nodemon: "dev". </p>
<p> Rodando o servidor: escrever no terminal "npm run dev". </p>
<p> Parar de rodar o servidor: no terminal clicar nas teclas de "Ctrl" e "C". </p>

<h2> Método HTTP </h2>
<p> Porta= 3000 </p>
<p> Caminho da URL: http://localhost:3000/ </p>

| Método | URL            | Descrição                                                                                                  |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------     |
| POST   | /order         | Cria um pedido usando as informações enviadas dentro do arquivo `request body`.                            |
| GET    | /order         | Retorna uma matriz de pedidos.                                                                             |
| GET    | /order/:id     | Retorna o objeto de pedido específico `id`.                                                                |
| DELETE | /order/:id     | Remove o objeto de pedido específico `id` e retorna status 204.                                            |
| PUT    | /order/:id     | Atualiza o objeto de pedido específico `id` usando o arquivo `request body`e retorna o usuário modificado. |
| PATCH  | /order/:id     | Recebe objeto de pedido específico `id` e alterar o status do pedido recebido para "Pronto".               |


#### Esquema de pedidos

Cada _recurso_ de pedido dev estar de acordo com a seguinte estrutura JSON:

```js
{
  id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", 
  order: "1 x-salada, 2 batatas grandes, 1 refrigerante",
  clientName:"Maria",
  price: 40.50,
  orderStatus: "Preparando"
}
```


