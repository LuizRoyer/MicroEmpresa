import { IItemVenda } from "./itemVenda.model";

export interface IVenda {

    notaFiscal: Number;
    codigoCliente: Number;
    data: String;
    desconto: Number;
    pagamento: Number;
    parcela: Number;
    itemVenda:IItemVenda;
}