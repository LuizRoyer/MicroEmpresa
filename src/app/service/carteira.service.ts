import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getCarteira() {
    return this.http.get(`${this.uri}/Carteira`);
    this.http
  }

  getCarteiraById(id) {
    return this.http.get(`${this.uri}/Carteira/${id}`);
  }

  addCarteira(codigoCompra, codigoFornecedor, codigoProduto, dataCompra, status, quantidade, valorProduto) {
    const carteira = {
      codigoCompra: codigoCompra,
      codigoFornecedor: codigoFornecedor,
      codigoProduto: codigoProduto,
      dataCompra: dataCompra,
      status: status,
      quantidade: quantidade,
      valorProduto: valorProduto,
    };
    return this.http.post(`${this.uri}/Carteira/add`, carteira);
  }

  updateCarteira(id, codigoCompra, codigoFornecedor, codigoProduto, dataCompra, status, quantidade, valorProduto) {
    const carteira = {
      codigoCompra: codigoCompra,
      codigoFornecedor: codigoFornecedor,
      codigoProduto: codigoProduto,
      dataCompra: dataCompra,
      status: status,
      quantidade: quantidade,
      valorProduto: valorProduto,
    };
    return this.http.post(`${this.uri}/Carteira/update/${id}`, carteira);
  }

  deleteCarteira(id) {
    return this.http.get(`${this.uri}/Carteira/delete/${id}`);
  }

}

