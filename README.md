# CorePanel

## Tags

`Frontend Only` `React` `TypeScript` `Tailwind CSS` `Dashboard`

## Ideia

CorePanel é um painel administrativo fictício criado para demonstrar visualização, organização e gerenciamento de dados.

O projeto simula dados que normalmente viriam de um backend ou banco de dados, apresentando métricas, tabelas, gráficos e ações administrativas em um dashboard responsivo.

## Objetivo no portfólio

Este projeto tem como foco demonstrar habilidades de frontend, principalmente em UI, organização de componentes, manipulação de dados, tabelas, paginação, filtros, formulários, gráficos e responsividade.

Os dados utilizados serão fictícios, mockados ou armazenados em `localStorage`, sem backend ou API real na primeira versão.

## Stack planejada

1. React
2. TypeScript
3. Vite
4. Tailwind CSS
5. React Router
[mais a decidir...]

## Funcionalidades MVP

### Dashboard

1. Usuários ativos
2. Receita simulada
3. Pedidos recentes
4. Tickets abertos
5. Taxa de crescimento

### Gráficos

1. Vendas por mês
2. Usuários por status
3. Atividades recentes
4. Distribuição de pedidos por status

### Tabelas

1. Listagem de usuários
2. Listagem de produtos
3. Listagem de pedidos
4. Listagem de clientes
5. Busca, filtros e paginação
6. Ações de visualizar, editar e excluir

### Formulários

1. Criar/editar usuário
2. Criar/editar produto
3. Criar/editar cliente
4. Validação com React Hook Form e Zod

## Status

Planned

# Miscelânea

## Estrutura

### Entidades

#### Usuários

| id | nome | email | cargo | status | cadastro | ações |
| -- | ---- | ----- | ----- | ------ | -------- | ----- |

#### Produtos

| id | nome | categoria | preço | status | estoque | ações |
| -- | ---- | --------- | ----- | ------ | ------- | ----- |

#### Pedidos

| id | cliente | status | valor | data | responsável | ações |
| -- | ------- | ------ | ----- | ---- | ----------- | ----- |

#### Clientes

| id | identificador | nome | tipo | status | ações |
| -- | ------------- | ---- | ---- | ------ | ----- |

> O campo `identificador` pode representar CPF ou CNPJ fictício, usado apenas como dado simulado.

## Customização

1. Tema escuro e tema claro
2. Modo compacto
3. Preferências visuais
4. Perfil de usuário fictício

## O que este projeto demonstra

* Criação de interfaces administrativas com React
* Uso de TypeScript para tipagem de dados
* Componentização de layout, cards, tabelas e formulários
* Manipulação de dados mockados
* Filtros, busca e paginação
* Validação de formulários
* Visualização de dados com gráficos
* Gerenciamento simples de estado global
* Responsividade e cuidado com experiência de usuário

## Pensamentos Durante o Desenvolvimento

```
Esta seção será usada para registrar decisões, problemas, aprendizados ou mudanças importantes que surgirem durante o desenvolvimento.

Caso não haja observações relevantes, esta seção pode permanecer vazia ou ser removida da versão final do README.
```
