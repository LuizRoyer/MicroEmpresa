import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemVendaService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getItemVenda() {
    return this.http.get(`${this.uri}/ItemVenda`);
    this.http
  }

  getItemVendaById(id) {
    return this.http.get(`${this.uri}/ItemVenda/${id}`);
  }

  addItemVenda(codigoProduto, codigoVenda, quantidade, valorFinal) {
    const itemVenda = {
      codigoProduto: codigoProduto,
      codigoVenda: codigoVenda,
      quantidade: quantidade,
      valorFinal: valorFinal
    };
    return this.http.post(`${this.uri}/ItemVenda/add`, itemVenda);
  }

  updateItemVenda(id, codigoProduto, codigoVenda, quantidade, valorFinal) {
    const itemVenda = {
      codigoProduto: codigoProduto,
      codigoVenda: codigoVenda,
      quantidade: quantidade,
      valorFinal: valorFinal
    };
    return this.http.post(`${this.uri}/ItemVenda/update/${id}`, itemVenda);
  }

  deleteItemVenda(id) {
    return this.http.get(`${this.uri}/ItemVenda/delete/${id}`);
  }

}


