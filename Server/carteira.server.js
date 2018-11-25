import express from "express";
import Carteira from "../model/carteira";

const router = express.Router();
//qtdCompra: { $sum: "$Produto.qtdCompra" },
//qtdCompra: { $sum: "$Produto.qtdCompra" }
//          qtdCompra: { $sum: "$Produto.qtdCompra" }
//          [{$project:{"valorTotal":{$sum:"$valorTotal"}},"qtdCompra":{$sum:"$qtdCompra"}}, {$group:{_id:null,valorTotal:{$sum:"$valorTotal"}}, qtdCompra:{$sum:"$qtdCompra"}}]
router.route("/Carteira").get((req, res) => {
  Carteira.find((err, carteira) => {
    if (err) console.log(err);
    else res.json(carteira);
  });
});

router.route("/Carteira/:id").get((req, res) => {
  Carteira.findById(req.params.id, (err, carteira) => {
    if (err) console.log(err);
    else res.json(carteira);
  });
});

router.route("/Carteira/add").post((req, res) => {
  let carteira = new Carteira(req.body);
  carteira
    .save()
    .then(carteira => {
      res.status(200).json({ carteira: " Carteira adicionada com sucesso" });
    })
    .catch(err => {
      res.status(400).send("Erro ao adicionar um carteira");
    });
});

router.route("/Carteira/update/:id").post((req, res) => {
  Carteira.findById(req.params.id, (err, carteira) => {
    if (!carteira) return next(new Error("Nao consegui abrir o arquivo"));
    else {
      carteira.codigoCompra = req.body.codigoCompra;
      carteira.nomeFornecedor = req.body.nomeFornecedor;
      carteira.Produto = req.body.Produto;
      carteira.dataCompra = req.body.dataCompra;
      carteira.qtdCompra = req.body.qtdCompra;
      carteira.valorProduto = req.body.valorProduto;

      carteira
        .save()
        .then(carteira => {
          res.json("Carteira Atualizada");
        })
        .catch(err => {
          res.status(400).send("falha ao Atualizar a Carteira");
        });
    }
  });
});

router.route("/Carteira/delete/:id").get((req, res) => {
  Carteira.findByIdAndRemove({ _id: req.params.id }, (err, carteira) => {
    if (err) res.json(err);
    else res.json("Deletado com sucesso");
  });
});

export default router;
