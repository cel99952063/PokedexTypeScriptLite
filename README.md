# Pokédex TypeScript Lite

## Sobre o projeto
O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo
Praticar os principais conceitos do Módulo 01:
* Node.js;
* JavaScript no back-end;
* TypeScript;
* interfaces;
* funções tipadas;
* arrays;
* objetos;
* JSON;
* métodos de array;
* classes;
* async/await;
* fetch;
* tratamento de erros;
* GitHub;
* GitFlow;
* Kanban.

## Tecnologias utilizadas
* Node.js
* TypeScript
* TSX
* PokeAPI
* Git
* GitHub

## Pré-requisitos
Antes de executar o projeto, é necessário ter instalado:
* Node.js
* npm
* Git

## Como instalar
Clone o repositório:
```bash
git clone https://github.com/cel99952063/PokedexTypeScriptLite.git

Acesse a pasta do projeto:
cd pokedex-typescript-lite

Instale as dependências:
npm install

Como executar
Execute o projeto em ambiente de desenvolvimento:
npm run dev

Estrutura do projeto
pokedex-typescript-lite/
## Estrutura do projeto
PokedexTypeScriptLite/
├── dist/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── CatalogoPokemon.ts
│   └── main.ts
├── .gitattributes
├── package-lock.json
├── package.json
├── pc_box.json
├── README.md
└── tsconfig.json

Funcionalidades
- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida

Entrada testada:
pikachu
Saída obtida:
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

Busca inválida
Entrada testada:
pokemon-inexistente
Saída obtida:
[ERRO] Pokémon não encontrado.

Duplicidade
Entrada testada:
adicionar pikachu duas vezes
Saída obtida:
[AVISO] pikachu já está no catálogo.

Remoção
Entrada testada:
remover ID 25
Saída obtida:
[OK] Pokémon removido do catálogo.



Conceitos aplicados

TypeScript
A tipagem estática foi aplicada em todo o escopo do projeto para prevenir erros de consistência de dados em tempo de compilação. Tipamos variáveis primitivas (como id: number e nome: string), assinaturas de funções com parâmetros obrigatórios e o retorno assíncrono utilizando o tipo nativo Promise<PokemonResumo | null>.

Interface PokemonResumo
Esta interface foi criada para servir como um contrato de dados limpo para a nossa aplicação. Ela simplifica o retorno complexo e extenso da PokeAPI, garantindo que o restante do sistema manipule de forma segura apenas os atributos obrigatórios e estruturados: id (número), nome (texto), tipos (array de strings), altura (número) e peso (número).


Fetch e async/await
A integração assíncrona com a PokeAPI foi desenvolvida no arquivo PokeApiService.ts utilizando a função nativa fetch do Node.js. A estrutura de controle assíncrona async/await foi implementada para pausar a execução de forma controlada até que os dados sejam completamente retornados e convertidos de JSON para os tipos definidos pela aplicação.


Tratamento de erros
O tratamento de fluxo de erro foi estruturado com blocos try/catch no serviço de busca. Caso a PokeAPI retorne um status de erro (como 404 para buscas inválidas) ou ocorra uma falha de conexão de rede, o erro é interceptado, mensagens claras e formatadas são impressas no terminal e a execução retorna null com segurança, impedindo o travamento da aplicação.


Métodos de array
Fizemos uso dos métodos funcionais de array para otimizar e manter a legibilidade das operações:

map: Utilizado no mapeamento do retorno da PokeAPI para extrair a propriedade de tipo aninhada de cada objeto e convertê-la em um array simples de strings.

some: Empregado na validação de duplicidade (verificando se o ID do Pokemon já existe no catálogo) e antes de remover um registro.

forEach: Usado para passar por cada elemento da coleção e exibir formatados no console.

filter: Utilizado para criar uma nova coleção contendo todos os elementos que não correspondem ao ID que desejamos excluir, limpando o catálogo.


Classe CatalogoPokemon
A classe foi criada no arquivo CatalogoPokemon.ts com o modificador de acesso private para encapsular e proteger a coleção interna pokemons de modificações diretas fora do escopo da classe. Foram expostos os métodos públicos com comportamentos específicos: adicionar (com validação anti-duplicidade), listar (com verificação de lista vazia) e remover (com validação de existência do ID).


Organização do Kanban
Link do Kanban: https://trello.com/invite/b/6a1f5e9495602a6cde1625c6/ATTIac819496f251706315c6067d74e2186d03520326/kanban-pokedex


Branches utilizadas
main
develop
feat/pokedex
docs/readme


Melhorias futuras
Criar menu interativo no terminal
Salvar catálogo em arquivo JSON
Exibir HP, ataque e defesa
Criar filtros por tipo de Pokémon
Criar uma API própria com Express
