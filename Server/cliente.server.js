import express from 'express';
import Cliente from '../model/cliente';

const router = express.Router();

router.route('/Cliente').get((req, res) => {
    Cliente.find((err, cliente) => {
        if (err)
            console.log(err);
        else
            res.json(cliente);
    });
});

router.route('/Cliente/:id').get((req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if (err)
            console.log(err)
        else
            res.json(cliente);
    });
});

router.route('/Cliente/add').post((req, res) => {
    let cliente = new Cliente(req.body);
    cliente.save()
        .then(produto => {
            res.status(200).json({ 'cliente': ' Cliente adicionado com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao adicionar um Cliente');
        });
});

router.route('/Cliente/update/:id').post((req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if (!cliente)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {
            cliente.codigo = req.body.descricao;
            cliente.nome = req.body.descricao;
            cliente.CPF = req.body.descricao;
            cliente.dataNascimento = req.body.descricao;
            cliente.telefone = req.body.descricao;
            cliente.celular = req.body.descricao;
            cliente.email = req.body.descricao;
            cliente.cep = req.body.descricao;

            cliente.save().then(cliente => {
                res.json('Cliente Atualizado');
            }).catch(err => {
                res.status(400).send('falha ao Atualizar o Cliente');
            });
        }
    });
});

router.route('/Cliente/delete/:id').get((req, res) => {
    Cliente.findByIdAndRemove({ _id: req.params.id }, (err, cliente) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})

export default router;