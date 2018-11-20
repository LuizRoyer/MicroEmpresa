import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getCliente() {
    return this.http.get(`${this.uri}/Cliente`);
    this.http
  }

  getClienteById(id) {
    return this.http.get(`${this.uri}/Cliente/${id}`);
  }

  addCliente(nome, CPF, dataNascimento, telefone, celular, email, cep) {
    const cliente = {
      nome: nome,
      CPF: CPF,
      dataNascimento: dataNascimento,
      telefone: telefone,
      celular: celular,
      email: email,
      cep: cep,
    };
    return this.http.post(`${this.uri}/Cliente/add`, cliente);
  }

  updateCliente(id, nome, CPF, dataNascimento, telefone, celular, email, cep) {
    const cliente = {
      nome: nome,
      CPF: CPF,
      dataNascimento: dataNascimento,
      telefone: telefone,
      celular: celular,
      email: email,
      cep: cep,
    };
    return this.http.post(`${this.uri}/Cliente/update/${id}`, cliente);
  }

  deleteCliente(id) {
    return this.http.get(`${this.uri}/Cliente/delete/${id}`);
  }

}
