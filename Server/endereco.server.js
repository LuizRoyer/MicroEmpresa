import express from 'express';
import Endereco from '../model/endereco';

const router = express.Router();

router.route('/Endereco').get((req, res) => {
    Endereco.find((err, endereco) => {
        if (err)
            console.log(err);
        else
            res.json(endereco);
    });
});
 
router.route('/Endereco/:cep/:proprietario').get((req, res) => {
    Endereco.findOne({cep:req.params.cep, proprietario:req.params.proprietario}, (err, endereco) => {
        if (err)
            console.log(err)
        else
            res.json(endereco);
    });
});


router.route('/Endereco/add').post((req, res) => {
    let endereco = new Endereco(req.body);
    endereco.save()
        .then(endereco => {
            res.status(200).json({ 'endereco': ' Endereco adicionado com sucesso' });
        }).catch(err => {
            res.status(400).send('Erro ao adicionar um Endereco');
        });
});

router.route('/Endereco/update/:id/:proprietario').post((req, res) => {
    Endereco.findOne({cep:req.params.cep, proprietario:req.params.proprietario}, (err, endereco) => {
        if (!endereco)
            return next(new Error('Nao consegui abrir o arquivo'));
        else {  
            endereco.proprietario = req.body.proprietario;         
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

router.route('/Endereco/delete/:id/:proprietario').get((req, res) => {
    Endereco.findByIdAndRemove({cep:req.params.cep, proprietario:req.params.proprietario}, (err, endereco) => {
        if (err)
            res.json(err);
        else
            res.json('Deletado com sucesso');
    })
})


export default router;
