import mongoose from 'mongoose';

const Carteira = mongoose.Schema;

let carteira = new Carteira({

    codigoCompra: {
        type: Number
    },
    nomeFornecedor: {
        type: String
    },
    Produto: {
        type: []
    },
    dataCompra: {
        type: String
    },
    status: {
        type: String,
        default:'Ativo'
    },
    quantidade: {
        type: Number
    },
    valorProduto: {
        type: Number
    },
});

export default mongoose.model('Carteira', carteira);








