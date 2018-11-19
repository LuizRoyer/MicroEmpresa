import mongoose from 'mongoose';

const Endereco = mongoose.Schema;

let endereco = new Endereco({

    cep: {
        type: String
    },
    logradouro: {
        type: String
    }, //Endereço 
    numero: {
        type: String
    },
    complemento: {
        type: String
    },
    bairro: {
        type: String
    },
    localidade: {
        type:
            String
    }, //cidade
    uf: {
        type: String
    } // Estado
});

export default mongoose.model('Endereco', endereco);