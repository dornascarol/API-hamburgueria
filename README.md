<h1> API Hamburgueria :hamburger: </h1>
<br>

<h2> Este foi o projeto que aprendi no curso do DevClub </h2>
<p> Aplicação para cadastro de pedidos de uma hamburgueria. Projeto prático para aprimorar os conceitos do módulo "Iniciando no Node" e criar uma API REST com base no escopo já definido de tarefas. </p>

<h2> Introdução </h2>
<p> Usar Node.JS e Express para criar uma API que executa operações CRUD nos pedidos. </p>

<h2> Ferramentas </h2>
<p> Na aplicação foi utilizado o <a href="https://nodejs.org/en/download" target="_blank" > Node.JS </a>  na versão 18.14.0 em LTS. </p>
<p> O <a href="https://www.npmjs.com/" target="_blank" > NPM </a> veio na instalação do Node.JS na versão 9.3.1 </p>
<p> Foi usado o programa <a href="https://insomnia.rest/download" target="_blank" > Insomnia </a> para testar as requisições das rotas simulando o Front-end. </p>

## Dependências 
Framework Express - versão 4.18.2 
<br>
<br>
:small_orange_diamond: `$ npm install express` 
<br>
<br>
<a href="https://www.npmjs.com/package/express" target="_blank" > Documentação </a> 
<br>
<br>
<br>
Biblioteca uuid - versão 9.0.0
<br>
<br>
:small_orange_diamond: `$ npm install uuid`
<br>
<br>
Função do tipo v.4 
<br>
<br>
<a href="https://www.npmjs.com/package/uuidv4" target="_blank" > Documentação </a> 

## Dependência de desenvolvimento
Nodemon - versão 2.0.22
<br>
<br>
:small_orange_diamond: `$ npm install nodemon -D`
<br>
<br>
Criar um script no `package.json` para o nodemon: "dev".
<br>
<br>
Rodando o servidor: escrever no terminal `npm run dev`.
<br>
<br>
Parar de rodar o servidor: no terminal clicar nas teclas de "Ctrl" e "C".

<h2> Método HTTP </h2>
<p> Porta = 3000 </p>
<p> Caminho da URL: http://localhost:3000/ </p>

| Método | URL            | Descrição                                                                                                  |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------     |
| POST   | /order         | Cria um pedido usando as informações enviadas dentro do arquivo `request body`.                            |
| GET    | /order         | Retorna uma matriz de pedidos.                                                                             |
| GET    | /order/:id     | Retorna o objeto de pedido específico `id`.                                                                |
| DELETE | /order/:id     | Remove o objeto de pedido específico `id` e retorna status 204.                                            |
| PUT    | /order/:id     | Atualiza o objeto de pedido específico `id` usando o arquivo `request body`e retorna o usuário modificado. |
| PATCH  | /order/:id     | Recebe objeto de pedido específico `id` e alterar o status do pedido recebido para "Pronto".               |

<br>

#### 1 [GET] /order

- Retorna o array com a lista de todos os pedidos criados. 

#### 2 [GET] /order/:id

- Recebe o `id` específico nos parâmetros e retorna o array com o pedido específico.
- Usa const index = request.orderIndex
- Usa a variável const specificOrder = ordersTotal[index]
- Se o _pedido_ com o `id` específico não for encontrado:

  - Responde status HTTP com o código `404` (Not Found).
  - Retorna o seguinte JSON: `{ error: "Not Found" }`.

#### 3 [POST] /order

- Recebe os parâmetros do pedido dentro do `body` da requisição.
- O `id` é gerado de forma automática e única pelo `uuid.v4`.
- Usa const { order, clientName, price, orderStatus } = request.body
- Usa a variável createOrder = { id:uuid.v4(),order, clientName, price, orderStatus }
- Depois do pedido criado:
  
  - Responde status HTTP com o código `201` (Created).
  - Retorna o JSON do pedido criado.

#### 4 [PUT] /order/:id

- Altera um pedido já feito, podendo alterar um ou todos os dados do pedido.
- O `id` do pedido deve ser enviado nos parâmetros da rota.
- Usa const { order, clientName, price, orderStatus } = request.body
- Usa const index = request.orderIndex
- Usa const id = request.orderId
- Usa a variável updateOrder = { id, order, clientName, price, orderStatus }
- Depois do pedido atualizado:
  
   - Retorna o JSON do pedido.
- Se o _pedido_ com o `id` específico não for encontrado:

  - Responde status HTTP com o código `404` (Not Found).
  - Retorna o seguinte JSON: `{ error: "Not Found" }`.

#### 5 [DELETE] /order/:id

- Deleta um pedido.
- O `id` do pedido deve ser enviado nos parâmetros da rota.
- Usa const index = request.orderIndex
- Usa o `splice` para deletar itens do array a partir do index.
- Depois do pedido deletado:
  
   - Responde status HTTP com o código `204` (No Content).
- Se o _pedido_ com o `id` específico não for encontrado:

  - Responde status HTTP com o código `404` (Not Found).
  - Retorna o seguinte JSON: `{ error: "Not Found" }`.

#### 6 [PATCH] /order/:id

- O `id` do pedido deve ser enviado nos parâmetros da rota.
- Quando chamada, deve alterar o status do pedido para "Pronto".
- Usa index = request.orderIndex
- Depois do pedido chamado:
  
   - Retorna o JSON do pedido com status alterado.
- Se o _pedido_ com o `id` específico não for encontrado:

  - Responde status HTTP com o código `404` (Not Found).
  - Retorna o seguinte JSON: `{ error: "Not Found" }`.  

## Esquema de pedidos

Cada _recurso_ de pedido deve estar de acordo com a seguinte estrutura JSON:

```js
{
  id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", 
  order: "1 x-salada, 2 batatas grandes, 1 refrigerante",
  clientName:"Maria",
  price: 40.50,
  orderStatus: "Preparando"
}
```
## Middlewares

##### `const checkId`

- Utilizado em todas rotas que recebem o parâmetro `id`.
- Verificar se o `id` existe.
- Se o `id` não for encontrado:

   - Responde status HTTP com o código `404` (Not Found).
   - Retorna o seguinte JSON: `{ error: "Not Found" }`. 

 ##### `const checkRequest`

- Chamado em todas requisições de rotas.
- Um `console.log` que mostra o método da requisiçao (GET, POST, PUT, DELETE e PATCH) e o método da URL.
- Usa const method = request.method
- Usa const url = request.url

### Requisitos
- Usa `next()` nos dois Middlewares.
- Usa `findIndex` no Middleware para encontrar cada elemento do array. O método retorna o índice (posição) do primeiro elemento encontrado. Ou retorna -1 se nenhuma correspondência for encontrada. 

### Exemplo do console.log
[GET] - /order
