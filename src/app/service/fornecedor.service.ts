import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getFornecedor() {
    return this.http.get(`${this.uri}/Fornecedor`);
  }

  getFornecedorAtivo() {
    return this.http.get(`${this.uri}/Fornecedor/ativo/`);
  }

  getFornecedorById(id) {
    return this.http.get(`${this.uri}/Fornecedor/${id}`);
  }

  addFornecedor(nome, nomeFantasia, status, CNPJ, atividade, telefone, celular, email, observacao, cep) {
    const fornecedor = {
      nome: nome,
      nomeFantasia: nomeFantasia,
      status: status,
      CNPJ: CNPJ,
      atividade: atividade,
      telefone: telefone,
      celular: celular,
      email: email,
      observacao: observacao,
      cep: cep,
    };
    return this.http.post(`${this.uri}/Fornecedor/add`, fornecedor);
  }

  updateFornecedor(id, nome, nomeFantasia, status, CNPJ, atividade, telefone, celular, email, observacao, cep) {
    const fornecedor = {
      nome: nome,
      nomeFantasia: nomeFantasia,
      status: status,
      CNPJ: CNPJ,
      atividade: atividade,
      telefone: telefone,
      celular: celular,
      email: email,
      observacao: observacao,
      cep: cep,
    };
    return this.http.post(`${this.uri}/Fornecedor/update/${id}`, fornecedor);
  }

  deleteFornecedor(id) {
    return this.http.get(`${this.uri}/Fornecedor/delete/${id}`);
  }

}
