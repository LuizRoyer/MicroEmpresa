export interface IEndereco {
  _id: String;
  proprietario: String;
  cep: String;
  logradouro: string; // Endereço
  numero: String;
  complemento: String;
  bairro: String;
  localidade: String; // cidade
  uf: String; // Estado
}
