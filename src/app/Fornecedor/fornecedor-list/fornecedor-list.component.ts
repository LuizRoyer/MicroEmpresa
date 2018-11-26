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
  iEnderecos: IEndereco[];
  iEnderecosos: any = {};

  displayedColumns = [
    'nome',
    'CNPJ',
    'atividade',
    'telefone',
    'email',
    'cep',
    'action'
  ];

  constructor(
    private forncedorService: FornecedorService,
    private enderecoService: EnderecoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buscarFornecedor();
  }

  buscarFornecedor() {
    this.forncedorService.getFornecedor().subscribe((data: IFornecedor[]) => {
      this.iFornecedores = data;
    });
  }

  editarFornecedor(id) {
    this.router.navigate([`/fornecedoredit/${id}`]);
  }

  deleteFornecedor(id, cep, proprietario) {
    this.forncedorService.deleteFornecedor(id).subscribe(() => {
      this.enderecoService.getIdEndereco(cep, proprietario).subscribe(ress => {
        this.iEnderecosos = ress;
        this.enderecoService
          .deleteEndereco(this.iEnderecosos._id)
          .subscribe(() => {
            this.buscarFornecedor();
          });
      });
    });
  }
}
