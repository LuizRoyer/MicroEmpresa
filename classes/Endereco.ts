export class Endereco {

    public proprietario: String;
    public cep: String;
    public logradouro: string; //Endereço 
    public numero: String;
    public complemento: String;
    public bairro: String;
    public localidade: String; //cidade
    public uf: String; // Estado

    constructor(pproprietario, pcep, plogradouro, pnumero, pcomplemento, pbairro, plocalidade, puf) {

        this.proprietario = pproprietario;
        this.cep = pcep;
        this.logradouro = plogradouro;
        this.numero = pnumero;
        this.complemento = pcomplemento;
        this.bairro = pbairro;
        this.localidade = plocalidade;
        this.uf = puf;
    }
}