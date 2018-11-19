import mongoose from 'mongoose';

const Fornecedor = mongoose.Schema;

let fornecedor = new Fornecedor({

    nome: {
        type: String
    },
    nomeFantasia: {
        type: String
    },
    status: {
        type: String,
        default: 'Ativo'
    },
    CNPJ: {
        type: String
    },
    atividade: {
        type: String
    },
    telefone: {
        type: String
    },
    celular: {
        type: String
    },
    email: {
        type: String
    },
    observacao: { 
        type: String 
    } ,
    cep: { 
        type: String 
    }       
});

export default mongoose.model('Fornecedor', fornecedor);