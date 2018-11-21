import express from 'express';
import ItemVenda from '../model/itemVenda';

const router = express.Router();

router.route('/ItemVenda').get((req, res) => {
    ItemVenda.find((err, itemVenda) => {
        if (err)
            console.log(err);
        else
            res.json(itemVenda);
    });
});

router.route('/ItemVenda/:id').get((req, res) => {
    ItemVenda.findById(req.params.id, (err, itemVenda) => {
        if (err)
            console.log(err)
        else
            res.json(itemVenda);
    });
});

router.route('/ItemVenda/add').post((req, res) => {
    let itemVenda = new ItemVenda(req.body);
    itemVenda.save()
        .then(itemVenda => {
            res.status(200).json({ 'itemVenda': ' ItemVenda adicionado com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao adicionar um ItemVenda');
        });
});

router.route('/ItemVenda/update/:id').post((req, res) => {
    ItemVenda.findById(req.params.id, (err, itemVenda) => {
        if (!itemVenda)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {
            itemVenda.codigoProduto = req.body.codigoProduto;
            itemVenda.codigoVenda = req.body.codigoVendago;
            itemVenda.quantidade = req.body.quantidade;
            itemVenda.valorFinal = req.body.valorFinal;

            itemVenda.save().then(cliente => {
                res.json('ItemVenda Atualizado');
            }).catch(err => {
                res.status(400).send('falha ao Atualizar o ItemVenda');
            });
        }
    });
});

router.route('/ItemVenda/delete/:id').get((req, res) => {
    ItemVenda.findByIdAndRemove({ _id: req.params.id }, (err, itemVenda) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})

export default router;