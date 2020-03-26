const express = require('express'); // importando a biblioteca express.
const cors = require('cors');
const routes = require('./routes'); // importa as rotas

const app = express(); // instancia minha aplicação.

// manda o express converter a requisição
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * 
 * 
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do Back-end
 * POST: Criar uma informação no Back-End
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */


 /**
  * 
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros/paginação)
  * Route Parms: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisião, utlizado para criar ou alterar um recurso.
  * 
  */


//app.listen(3333); // manda ouvir na porta 
app.listen(3333, () => {
  console.log('Ouvindo na porta 3333');
  }); // manda ouvir na porta