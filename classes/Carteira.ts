export class Carteira {

  public nomeFornecedor: String;
  public dataCompra: String;
  public qtd: Number;
  public valor: Number;


  constructor(nomeFornecedor, dataCompra, qtd, valor) {

      this.nomeFornecedor = nomeFornecedor;
      this.dataCompra = dataCompra;
      this.qtd = qtd;
      this.valor = valor;
  }
}
