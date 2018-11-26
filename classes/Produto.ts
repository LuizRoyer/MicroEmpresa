export class Produto {
  public _id: String;
  public descricao: String;
  public valorUnitario: Number;
  public observacao: string;
  public tamanho: String;
  public qtdCompra: Number;
  public valorTotal: Number;
  public qtdDoProdutoI: Number;

  constructor(
    id,
    pdescricao,
    pvalorUnitario,
    pobservacao,
    ptamanho,
    pqtdCompra,
    pvalorTotal,
    qtdDoProdutoI
  ) {
    this._id = id;
    this.descricao = pdescricao;
    this.valorUnitario = pvalorUnitario;
    this.observacao = pobservacao;
    this.tamanho = ptamanho;
    this.qtdCompra = pqtdCompra;
    this.valorTotal = pvalorTotal;
    this.qtdDoProdutoI = qtdDoProdutoI;
  }
}
