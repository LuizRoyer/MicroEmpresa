import express from 'express';
import Fornecedor from '../model/fornecedor';

const router = express.Router();

router.route('/Fornecedor').get((req, res) => {
    Fornecedor.find((err, fornecedor) => {
        if (err)
            console.log(err);
        else
            res.json(fornecedor);
    });
});


router.route('/Fornecedor/ativo/').get((req, res) => {
  Fornecedor.find({status: "Ativo"},(err, fornecedor) => {
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

// update.({$and:[{descricao: "Casaco"}, {tamanho:"G"}]}, {$set:{quantidade:10}})

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

export default router;
