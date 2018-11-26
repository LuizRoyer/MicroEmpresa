import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VendaService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getVenda() {
    return this.http.get(`${this.uri}/Venda`);
    this.http
  }

  getVendaById(id) {
    return this.http.get(`${this.uri}/Venda/${id}`);
  }

  addVenda(nomeCliente, dataVenda, desconto, pagamento, parcela, Produto, valorFinal) {
    const venda = {
      nomeCliente: nomeCliente,
      dataVenda: dataVenda,
      desconto: desconto,
      pagamento: pagamento,
      parcela: parcela,
      Produto: Produto,
      valorFinal: valorFinal
    };
    return this.http.post(`${this.uri}/Venda/add`, venda);
  }

  updateVenda(id, nomeCliente, dataVenda, desconto, pagamento, parcela, Produto, valorFinal) {
    const venda = {
      nomeCliente: nomeCliente,
      dataVenda: dataVenda,
      desconto: desconto,
      pagamento: pagamento,
      parcela: parcela,
      Produto: Produto,
      valorFinal: valorFinal,

    };
    return this.http.post(`${this.uri}/Venda/update/${id}`, venda);
  }

  deleteVenda(id) {
    return this.http.get(`${this.uri}/Venda/delete/${id}`);
  }

}

