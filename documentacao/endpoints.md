# Endpoints da API

## GET /produtos
Retorna todos os cupcakes.

## GET /produto/:id
Retorna detalhes de um produto específico.

## POST /pedido
Recebe a simulação de um pedido.

Exemplo de corpo da requisição:
{
  "produto_id": 1,
  "quantidade": 2
}
