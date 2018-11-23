import { Endereco } from "./Endereco";
import { Cliente } from "./Cliente";

export class EnderecoCliente {
    public cep: Endereco;
    public cliente: Cliente;

    constructor(pcep, pcliente) {
        this.cep = pcep;
        this.cliente = pcliente;
    }
}
