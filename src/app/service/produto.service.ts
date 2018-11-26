import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getProduto() {
    return this.http.get(`${this.uri}/Produto`);
  }

  getProdutoById(id) {
    return this.http.get(`${this.uri}/Produto/${id}`);
  }

  updateQuantidadeProduto(id, qtd) {
    return this.http.get(`${this.uri}/Produto/${id}/${qtd}`);
  }

  addProduto(
    descricao,
    valorUnitario,
    observacao,
    marca,
    tamanho,
    unidade,
    tipo,
    quantidade
  ) {
    const produto = {
      descricao: descricao,
      valorUnitario: valorUnitario,
      observacao: observacao,
      marca: marca,
      tamanho: tamanho,
      unidade: unidade,
      tipo: tipo,
      quantidade: quantidade
    };
    return this.http.post(`${this.uri}/Produto/add`, produto);
  }

  updateProduto(
    id,
    descricao,
    valorUnitario,
    observacao,
    marca,
    tamanho,
    unidade,
    tipo,
    quantidade
  ) {
    const produto = {
      descricao: descricao,
      valorUnitario: valorUnitario,
      observacao: observacao,
      marca: marca,
      tamanho: tamanho,
      unidade: unidade,
      tipo: tipo,
      quantidade: quantidade
    };
    return this.http.post(`${this.uri}/Produto/update/${id}`, produto);
  }

  deleteProduto(id) {
    return this.http.get(`${this.uri}/Produto/delete/${id}`);
  }
}
