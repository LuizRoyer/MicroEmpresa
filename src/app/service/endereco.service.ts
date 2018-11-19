import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient,private http1: Http) { }

  getEndereco() {
    return this.http.get(`${this.uri}/Endereco`);
  }

  getEnderecoById(cep) {
    return this.http.get(`${this.uri}/Endereco/${cep}`);
  }

  addEndereco(cep, logradouro, numero, complemento, bairro, localidade, uf) {
    const endereco = {
      cep: cep,
      logradouro: logradouro, //Endereço 
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      localidade: localidade, //cidade
      uf: uf, // Estado   
    };
    return this.http.post(`${this.uri}/Endereco/add`, endereco);
  }

  updateEndereco(cep, logradouro, numero, complemento, bairro, localidade, uf) {
    const endereco = {
      cep: cep,
      logradouro: logradouro, //Endereço 
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      localidade: localidade, //cidade
      uf: uf // Estado   

    };
    return this.http.post(`${this.uri}/Endereco/update/${cep}`, endereco);
  }

  deleteEndereco(cep) {
    return this.http.get(`${this.uri}/Endereco/delete/${cep}`);
  }

  buscar(cep) {
    return new Promise((resolve, reject) => {
      this.http1.get(`https://viacep.com.br/ws/${cep}/json/`)
        .subscribe((result: any) => {
          resolve (result.json())
        },
        (error)=>{
          reject(error.json());
        })
    })
  }
}
