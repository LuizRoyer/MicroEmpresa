import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { IFornecedor } from 'interface/fornecedor.model';
import { Endereco } from 'model/endereco';
import { EnderecoService } from 'src/app/service/endereco.service';
import { IEnderecoFornecedor } from 'interface/enderecoFornecedor.model';
import { IEndereco } from 'interface/endereco.model';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})

export class FornecedorListComponent implements OnInit {
  
  iEnderecoFornecedores: IEnderecoFornecedor[];
iFornecedores: IFornecedor[];
iEnderecos :IEndereco[];
  
  displayedColumns = ['nome', 'nomeFantasia', 'CNPJ', 'atividade', 'telefone', 'celular', 'email', 'observacao', 'status',
    'cep', 'logradouro', 'numero', 'complemento', 'bairro', 'localidade', 'uf', 'action'];


  constructor(private forncedorService: FornecedorService, private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit() {
    this.buscarFornecedor();
  }

  buscarFornecedor() {
    this.forncedorService.getFornecedor().subscribe((data: IFornecedor[]) => {
      this.iFornecedores = data;
      console.log('Buscando Fornecedor');
      console.log(this.iEnderecoFornecedores);

      for (var i = 0; i < data.length; i++) {
        this.enderecoService.getEnderecoById(this.iFornecedores[i].cep).subscribe((data1: IEndereco[]) => {
          this.iEnderecos = data1;
          console.log('Buscando Endereços');
          console.log(this.iEnderecos);

        });
      }           
    });
    

  }
  editarFornecedor(id) {
    this.router.navigate([`/fornecedoredit/${id}`]);
  }

  deleteFornecedor(id, cep) {
    this.enderecoService.deleteEndereco(cep).subscribe(() => {
      this.forncedorService.deleteFornecedor(id).subscribe(() => {
        this.buscarFornecedor();
      });
    });
  }

}
