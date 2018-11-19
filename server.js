import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Fornecedor from './model/fornecedor';
import Endereco from './model/endereco';
import Produto from './model/produto';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/MicroEmpresa');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDb Connection sucesso');
});

router.route('/Fornecedor').get((req, res) => {
    Fornecedor.find((err, fornecedor) => {
        if (err)
            console.log(err);
        else
            res.json(fornecedor);
    });
});

router.route('/Fornecedor/:id').get((req, res) => {
    Fornecedor.findById(req.params.id, (err, fornecedor) => {
        if (err)
            console.log(err)
        else
            res.json(fornecedor);
    });
});

router.route('/Fornecedor/add').post((req, res) => {
    let fornecedor = new Fornecedor(req.body);
    fornecedor.save()
        .then(fornecedor => {
            res.status(200).json({ 'fornecedor': ' fornecedor adicionado com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao adicionar um Fornecedor');
        });
});

router.route('/Fornecedor/update/:id').post((req, res) => {
    Fornecedor.findById(req.params.id, (err, fornecedor) => {
        if (!fornecedor)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {
            fornecedor.nome = req.body.nome;
            fornecedor.nomeFantasia = req.body.nomeFantasia;
            fornecedor.status = req.body.status;
            fornecedor.CNPJ = req.body.CNPJ;
            fornecedor.atividade = req.body.atividade;
            fornecedor.telefone = req.body.telefone;
            fornecedor.celular = req.body.celular;
            fornecedor.email = req.body.email;
            fornecedor.observacao = req.body.observacao;
            fornecedor.cep = req.body.cep;

            fornecedor.save().then(fornecedor => {
                res.json('Fornecedor Atualizado');
            }).catch(err => {
                res.status(400).send('falha ao Atualizar o Fornecedor');
            });
        }
    });
});

router.route('/Fornecedor/delete/:id').get((req, res) => {
    Fornecedor.findByIdAndRemove({ _id: req.params.id }, (err, fornecedor) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})

//  Roda Endereço
router.route('/Endereco').get((req, res) => {
    Endereco.find((err, endereco) => {
        if (err)
            console.log(err);
        else
            res.json(endereco);
    });
});

router.route('/Endereco/:id').get((req, res) => {
    Endereco.findById(req.params.id, (err, endereco) => {
        if (err)
            console.log(err)
        else
            res.json(endereco);
    });
});

router.route('/Endereco/add').post((req, res) => {
    let endereco = new Endereco(req.body);
    endereco.save()
        .then(fornecedor => {
            res.status(200).json({ 'endereco': ' Endereco adicionado com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao adicionar um Endereco');
        });
});

router.route('/Endereco/update/:id').post((req, res) => {
    Endereco.findById(req.params.id, (err, endereco) => {
        if (!endereco)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {
            endereco.cep = req.body.cep;
            endereco.logradouro = req.body.logradouro;
            endereco.numero = req.body.numero;
            endereco.complemento = req.body.complemento;
            endereco.bairro = req.body.bairro;
            endereco.localidade = req.body.localidade;
            endereco.uf = req.body.uf;

            endereco.save().then(endereco => {
                res.json('Endereço Atualizado');
            }).catch(err => {
                res.status(400).send('falha ao Atualizar o Endereco');
            });
        }
    });
});

router.route('/Endereco/delete/:id').get((req, res) => {
    Endereco.findByIdAndRemove({ _id: req.params.id }, (err, produto) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})

// Produto
router.route('/Produto').get((req, res) => {
    Produto.find((err, produto) => {
        if (err)
            console.log(err);
        else
            res.json(produto);
    });
});

router.route('/Produto/:id').get((req, res) => {
    Produto.findById(req.params.id, (err, produto) => {
        if (err)
            console.log(err)
        else
            res.json(produto);
    });
});

router.route('/Produto/add').post((req, res) => {
    let produto = new Produto(req.body);
    produto.save()
        .then(produto => {
            res.status(200).json({ 'produto': ' Produto adicionado com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao adicionar um Produto');
        });
});

router.route('/Produto/update/:id').post((req, res) => {
    Produto.findById(req.params.id, (err, produto) => {
        if (!produto)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {
            produto.descricao = req.body.descricao;
            produto.valorUnitario = req.body.valorUnitario;
            produto.observacao = req.body.observacao;
            produto.marca = req.body.marca;
            produto.tamanho = req.body.tamanho;
            produto.unidade = req.body.unidade;
            produto.tipo = req.body.tipo;

            produto.save().then(fornecedor => {
                res.json('Produto Atualizado');
            }).catch(err => {
                res.status(400).send('falha ao Atualizar o Produto');
            });
        }
    });
});

router.route('/Produto/delete/:id').get((req, res) => {
    Produto.findByIdAndRemove({ _id: req.params.id }, (err, produto) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})



app.use('/', router);
app.listen(4000, () => console.log('Express server Rodando na porta 4000'));