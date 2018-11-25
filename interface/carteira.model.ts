import { Produto } from 'classes/Produto';

export interface ICarteira {

    codigoCompra: Number;
    nomeFornecedor: String;
    Produto: Produto[];
    dataCompra: String;
    qtdCompra: Number;
    valorProduto: Number;
}





