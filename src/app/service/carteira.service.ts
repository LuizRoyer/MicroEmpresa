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

  addCarteira(nomeFornecedor, Produto, dataCompra, qtdCompra, valorProduto) {
    const carteira = {
     
      nomeFornecedor: nomeFornecedor,
      Produto: Produto,
      dataCompra: dataCompra,   
      qtdCompra: qtdCompra,
      valorProduto: valorProduto,
    };
    return this.http.post(`${this.uri}/Carteira/add`, carteira);
  }

  updateCarteira(id, nomeFornecedor, Produto, dataCompra,qtdCompra, valorProduto) {
    const carteira = {
      
      nomeFornecedor: nomeFornecedor,
      Produto: Produto,
      dataCompra: dataCompra,      
      qtdCompra: qtdCompra,
      valorProduto: valorProduto,
    };
    return this.http.post(`${this.uri}/Carteira/update/${id}`, carteira);
  }

  deleteCarteira(nomeFornecedor,dataCompra) {
    return this.http.get(`${this.uri}/Carteira/delete/${nomeFornecedor}/${dataCompra}`);
  }

  deleteCarteiraProduto(id,nomeProduto) {
    return this.http.get(`${this.uri}/Carteira/delete/${id}/${nomeProduto}`);
  }



}

