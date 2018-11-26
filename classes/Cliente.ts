export class Cliente {
  public nome: String;
  public CPF: String;
  public dataNascimento: String;
  public telefone: String;
  public celular: String;
  public email: String;
  public cep: String;

  constructor(pnome, pCPF, pdataNascimento, ptelefone, pcelular, pemail, pcep) {
    this.nome = pnome;
    this.CPF = pCPF;
    this.dataNascimento = pdataNascimento;
    this.telefone = ptelefone;
    this.celular = pcelular;
    this.email = pemail;
    this.cep = pcep;
  }
}
