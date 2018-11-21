import express from 'express';
import Venda from '../model/venda';

const router = express.Router();

router.route('/Venda').get((req, res) => {
    Venda.find((err, venda) => {
        if (err)
            console.log(err);
        else
            res.json(venda);
    });
});

router.route('/Venda/:id').get((req, res) => {
    Venda.findById(req.params.id, (err, venda) => {
        if (err)
            console.log(err)
        else
            res.json(venda);
    });
});

router.route('/Venda/add').post((req, res) => {
    let venda = new Venda(req.body);
    venda.save()
        .then(venda => {
            res.status(200).json({ 'venda': ' Venda salva com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao salvar uma Venda');
        });
});

router.route('/Venda/update/:id').post((req, res) => {
    Venda.findById(req.params.id, (err, venda) => {
        if (!venda)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {
            venda. notaFiscal= req.body.notaFiscal;
            venda. codigoCliente= req.body.codigoCliente;
            venda. data= req.body.data;
            venda. desconto= req.body.desconto;
            venda. pagamento= req.body.pagamento;
            venda. parcela= req.body.parcela;
            venda. itemVenda= req.body.itemVenda;

            venda.save().then(venda => {
                res.json('Venda Atualizada');
            }).catch(err => {
                res.status(400).send('falha ao Atualizar a Venda');
            });
        }
    });
});

router.route('/Venda/delete/:id').get((req, res) => {
    Venda.findByIdAndRemove({ _id: req.params.id }, (err, venda) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})

export default router;