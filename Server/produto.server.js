import express from 'express';
import Produto from '../model/produto';

const router = express.Router();

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

            produto.save().then(produto => {
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

export default router;