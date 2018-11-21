import mongoose from 'mongoose';

const Cliente = mongoose.Schema;

let cliente = new Cliente({

    codigoCompra: {
        type: Number
    },
    codigoFornecedor: {
        type: Number
    },
    codigoProduto: {
        type: Number
    },
    dataCompra: {
        type: String
    },
    status: {
        type: String,
        default: Ativo
    },
    quantidade: {
        type: Number
    },
    valorProduto: {
        type: Number
    },
});

export default mongoose.model('Cliente', cliente);








