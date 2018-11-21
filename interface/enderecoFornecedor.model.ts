import { IEndereco } from '../interface/endereco.model';

export interface IEnderecoFornecedor {
   
    nome: String;
    nomeFantasia: String;
    status: String;
    CNPJ: String;
    atividade: String;
    telefone: String;
    celular: String;
    email: String;
    observacao: String;  
    cep:String;    
   endereco: IEndereco;
  }