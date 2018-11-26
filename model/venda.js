import mongoose from 'mongoose';

const Venda = mongoose.Schema;

let venda = new Venda({

    notaFiscal: {
        type: Number
    },
    nomeCliente: {
        type: String
    },
    dataVenda: {
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
    Produto: {
        type: []
    },    
    valorFinal: {
        type: Number
    }
});

export default mongoose.model('Venda', venda);