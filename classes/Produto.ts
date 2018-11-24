export class Produto {

  
    public descricao: String;
    public valorUnitario: Number;
    public observacao: string;
    public tamanho:String;
    public qtdCompra: Number;
    public valorTotal: Number;

    constructor(pdescricao, pvalorUnitario, pobservacao, ptamanho,pqtdCompra, pvalorTotal) {

        this.descricao = pdescricao;
        this.valorUnitario = pvalorUnitario;
        this.observacao = pobservacao;
        this.tamanho=ptamanho;
        this.qtdCompra = pqtdCompra;
        this.valorTotal = pvalorTotal;
    }
}