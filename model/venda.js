import mongoose from 'mongoose';

const Venda = mongoose.Schema;

let venda = new Venda({

    notaFiscal: {
        type: Number
    },
    nomeCliente: {
        type: String
    },
    data: {
        type: String
    },
    desconto: {
        type: Number
    },
    pagamento: {
        type: String
    },
    parcela: {
        type: Number
    },
    itemVenda: {
        type: String
    },
});

export default mongoose.model('Venda', venda);