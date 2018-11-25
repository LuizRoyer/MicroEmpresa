import { IProduto } from "./produto.model";

export interface ICarteira {

    codigoCompra: Number;
    nomeFornecedor: String;
    Produto: IProduto[];
    dataCompra: String;    
    qtdCompra: Number;
    valorProduto: Number;
}





