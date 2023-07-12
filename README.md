<h1> API Hamburgueria :hamburger: </h1>
<br>

<h2> Este foi o projeto que aprendi no curso do DevClub </h2>
<p> Aplicação para cadastro de pedidos de uma hamburgueria. Projeto prático para aprimorar os conceitos do módulo "Iniciando no Node" e criar uma API REST, com base no escopo já definido de tarefas. </p>

<h2> Introdução </h2>
<p> Usar Node.JS e Express para criar uma API que executa operações CRUD nos pedidos. </p>

<h2> Ferramentas </h2>
<p> Para a aplicação foi utilizado o <a target="_blank" href="https://nodejs.org/en/download"> Node.JS </a>  na versão 18.14.0 em LTS </p>
<p> O <a target="_blank" href="https://www.npmjs.com/"> NPM </a> veio na instalação do Node.JS na versão 9.3.1 </p>
<p> Foi usado o programa <a target="_blank" href="https://insomnia.rest/download"> Insomnia </a> para testar as requisições das rotas simulando o Front-end. </p>

<h2> Dependências </h2>
<p> Framework Express - versão 4.18.2 </p>
<p> :small_orange_diamond: $ npm install express </p>
<p> <a target="_blank" href="https://www.npmjs.com/package/express"> Documentação </a> </p>
<br>
<p> Biblioteca uuid - versão 9.0.0 </p>
<p> :small_orange_diamond: $ npm install uuid </p>
<p> Função do tipo v.4 </p>
<p> <a target="_blank" href="https://www.npmjs.com/package/uuidv4"> Documentação </a> </p>

<h2> Dependência de desenvolvimento </h2>
<p> Nodemon - versão 2.0.22 </p>
<p> :small_orange_diamond: $ npm install nodemon </p>
<p> Foi criado um script ao package.json para o nodemon: "dev". </p>
<p> Rodando o servidor: escrever no terminal "npm run dev". </p>
<p> Parar de rodar o servidor: no terminal clicar nas teclas de "Ctrl" e "C". </p>

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
- Usa a função const specificOrder = ordersTotal[index]
- Se o _pedido_ com o `id` específico não for encontrado:

  - Responde status HTTP com o código `404` (Not Found).
  - Retorna o seguinte JSON: `{ error: "Not Found" }`.

#### 3 [POST] /order

- Recebe os parâmetros do pedido dentro do `body` da requisição.
- O `id` é gerado de forma automática e única pelo `uuid.v4`.
- Usa const { order, clientName, price, orderStatus } = request.body
- Usa a função createOrder = { id:uuid.v4(),order, clientName, price, orderStatus }
- Depois do pedido criado:
  
  - Responde status HTTP com o código `201` (Created).
  - Retorna o JSON do pedido criado.

#### 4 [PUT] /order/:id

- Altera um pedido já feito, podendo alterar um ou todos os dados do pedido.
- O `id` do pedido deve ser enviado nos parâmetros da rota.
- Usa const { order, clientName, price, orderStatus } = request.body
- Usa const index = request.orderIndex
- Usa const id = request.orderId
- Usa a função updateOrder = { id, order, clientName, price, orderStatus }
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


