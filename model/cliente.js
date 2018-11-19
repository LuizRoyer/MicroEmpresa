import mongoose from 'mongoose';

const Cliente = mongoose.Schema;

let cliente = new Cliente({

    codigo: {
        type: Number
    },
    nome: {
        type: String
    },
    CPF: {
        type: String
    },
    dataNascimento: {
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
    cep: {
        type: String
    },
});

export default mongoose.model('Cliente', cliente);








