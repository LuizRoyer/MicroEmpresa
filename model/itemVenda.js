import mongoose from 'mongoose';

const ItemVenda = mongoose.Schema;

let itemVenda = new ItemVenda({

    codigoProduto: {
        type: Number
    },
    codigoVenda: {
        type: Number
    },
    quantidade: {
        type: Number
    },
    valorFinal: {
        type: Number
    }
});

export default mongoose.model('ItemVenda', itemVenda);








