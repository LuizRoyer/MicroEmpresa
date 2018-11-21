import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import ClienteServer from './cliente.server.js';
import FornecedorServer from './fornecedor.server.js';
import EnderecoServer from './endereco.server.js';
import ProdutoServer from './produto.server.js';
import VendaServer from './venda.server.js';
import CarteiraServer from './carteira.server.js';
import ItemVendaServer from './itemVenda.server.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/MicroEmpresa');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDb Connection sucesso');
});

app.use('/', ClienteServer);
app.use('/', FornecedorServer);
app.use('/', EnderecoServer);
app.use('/', ProdutoServer);
app.use('/', VendaServer);
app.use('/', CarteiraServer);
app.use('/', ItemVendaServer);

app.listen(4000, () => console.log('Express server Rodando na porta 4000'));

