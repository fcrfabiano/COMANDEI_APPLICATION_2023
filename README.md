# COMANDEI
Um aplicativo de gerenciamento de comandas para Restaurantes e Lanchonetes

## Como Rodar

No seu terminal rode:

    cd CODE
    docker-compose up -d

Para ver o frontend acesse: [Back-End](http://localhost:3001/)
Para ver a documentação acesse: [Documentação](http://localhost:3001/doc)

É necessário rodar o aplicativo React Native dentro da pasta CODE/MOBILE para lançar as comandas,
a url do aplicativo deve ser configurada se necessário dentro de CODE/MOBILE/src/services/api.ts.

# Categorias

- Não deve ser possível cadastrar uma categoria já existente.
- É possível cadastrar novas categorias.
- É possível listar todas as categorias.
- É possível listar os produtos por categoria.

# Produtos

- É possível cadastrar novos produtos.
- É possível fazer upload da imagem do produto.
- É possível listar todos os produtos.

# Pedidos

- É possível criar um pedido.
- É possível deletar um pedido.
- É possível atualizar o status do pedido.
- É possível listar todos os pedidos.
- Quando um novo pedido é cadastrado, o back-end envia uma notificação via websocket para o front-end.
