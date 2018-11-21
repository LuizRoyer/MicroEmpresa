import mongoose from 'mongoose';

const Produto = mongoose.Schema;

let produto = new Produto({

    nome: {
        type: String
    },
    descricao: {
        type: String
    },
    valorUnitario: {
        type: Number
    },
    observacao: {
        type: String
    },
    marca: {
        type: String
    },
    tamanho: {
        type: String
    },
    unidade: {
        type: String
    },
    tipo: {
        type: String
    },
    quantidade: {
        type: Number
    }
});

export default mongoose.model('Produto', produto);