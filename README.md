# Sistema de Gerenciamento de RPG

API para gerenciamento de personagens e itens mágicos de um jogo de RPG.

## Endpoints

### Personagens

#### Criar Personagem
```http
POST http://localhost:3000/personagens
Content-Type: application/json

{
  "nome": "Gandalf",
  "nomeAventureiro": "Mago Cinzento",
  "classe": "MAGO",
  "forca": 2,
  "defesa": 8
}
```

#### Listar Todos os Personagens
```http
GET http://localhost:3000/personagens
```

#### Buscar Personagem por ID
```http
GET http://localhost:3000/personagens/1
```

#### Atualizar Nome do Aventureiro
```http
PUT http://localhost:3000/personagens/1/nome-aventureiro
Content-Type: application/json

{
  "nomeAventureiro": "Mago Branco"
}
```

#### Remover Personagem
```http
DELETE http://localhost:3000/personagens/1
```

#### Adicionar Item Mágico ao Personagem
```http
PUT http://localhost:3000/personagens/1/itens/1
```

#### Remover Item Mágico do Personagem
```http
DELETE http://localhost:3000/personagens/1/itens/1
```

#### Listar Itens Mágicos do Personagem
```http
GET http://localhost:3000/personagens/1/itens
```

#### Buscar Amuleto do Personagem
```http
GET http://localhost:3000/personagens/1/amuleto
```

### Itens Mágicos

#### Criar Item Mágico
```http
POST http://localhost:3000/itens-magicos
Content-Type: application/json

{
  "nome": "Espada Flamejante",
  "tipo": "ARMA",
  "forca": 5,
  "defesa": 0
}
```

#### Listar Todos os Itens Mágicos
```http
GET http://localhost:3000/itens-magicos
```

#### Buscar Item Mágico por ID
```http
GET http://localhost:3000/itens-magicos/1
```

## Regras de Negócio

### Personagens
- A soma de força e defesa não pode ultrapassar 10 pontos
- Classes disponíveis: GUERREIRO, MAGO, ARQUEIRO, LADINO, BARDO
- O personagem só pode possuir 1 item do tipo AMULETO

### Itens Mágicos
- Tipos disponíveis: ARMA, ARMADURA, AMULETO
- Itens do tipo ARMA devem ter defesa igual a 0
- Itens do tipo ARMADURA devem ter força igual a 0
- Itens do tipo AMULETO podem ter força e defesa
- Não podem existir itens com força e defesa igual a 0
- Força e defesa podem ser no máximo 10

## Exemplos de Requisições

### Criar Personagem Guerreiro
```json
{
  "nome": "Aragorn",
  "nomeAventureiro": "Rei Elessar",
  "classe": "GUERREIRO",
  "forca": 8,
  "defesa": 2
}
```

### Criar Item Mágico (Arma)
```json
{
  "nome": "Espada Flamejante",
  "tipo": "ARMA",
  "forca": 5,
  "defesa": 0
}
```

### Criar Item Mágico (Armadura)
```json
{
  "nome": "Armadura de Mithril",
  "tipo": "ARMADURA",
  "forca": 0,
  "defesa": 7
}
```

### Criar Item Mágico (Amuleto)
```json
{
  "nome": "Amuleto da Proteção",
  "tipo": "AMULETO",
  "forca": 2,
  "defesa": 3
}
```
