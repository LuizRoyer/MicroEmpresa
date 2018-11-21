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

  addVenda(notaFiscal, codigoCliente, data, desconto, pagamento, parcela, IItemVenda) {
    const venda = {
      notaFiscal: notaFiscal,
      codigoCliente: codigoCliente,
      data: data,
      desconto: desconto,
      pagamento: pagamento,
      parcela: parcela,
      itemVenda: IItemVenda,
    };
    return this.http.post(`${this.uri}/Venda/add`, venda);
  }

  updateVenda(id, notaFiscal, codigoCliente, data, desconto, pagamento, parcela, IItemVenda) {
    const venda = {
      notaFiscal: notaFiscal,
      codigoCliente: codigoCliente,
      data: data,
      desconto: desconto,
      pagamento: pagamento,
      parcela: parcela,
      itemVenda: IItemVenda,

    };
    return this.http.post(`${this.uri}/Venda/update/${id}`, venda);
  }

  deleteVenda(id) {
    return this.http.get(`${this.uri}/Venda/delete/${id}`);
  }

}

