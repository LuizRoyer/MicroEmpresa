import { IEndereco } from "./endereco.model";
import { ICliente } from "./cliente.model";

export interface IEnderecoCliente {

    cep:IEndereco;
    cliente:ICliente;
}
