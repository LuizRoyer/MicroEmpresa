import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ICliente } from 'interface/cliente.model';
import { EnderecoService } from 'src/app/service/endereco.service';
import { IEndereco } from 'interface/endereco.model';
import { createPipe } from '@angular/compiler/src/core';
import { EnderecoCliente } from 'classes/EnderecoCliente';
import { Endereco } from 'classes/Endereco';
import { Cliente } from 'classes/Cliente';
import { IEnderecoCliente } from 'interface/enderecoCliente.model';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  iClientes: ICliente[];
  iEnderecos: IEndereco[];
  iEnderecoClientes: IEnderecoCliente[];
  clieteEndereco: EnderecoCliente;
  pEndereco: Endereco[];
  pCliente: Cliente[];

  displayedColumns = ['nome', 'CPF', 'email', 'cep', 'action'];

  constructor(
    private clienteService: ClienteService,
    private enderecoService: EnderecoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buscarClientes();
  }

  buscarClientes() {
    this.clienteService.getCliente().subscribe((data: ICliente[]) => {
      this.pCliente = data;
    });
  }

  editarCliente(id) {
    this.router.navigate([`/clienteedit/${id}`]);
  }

  deleteCliente(id, cep, proprietario) {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.enderecoService.deleteEndereco(cep, proprietario).subscribe(() => {
        this.buscarClientes();
      });
    });
  }
}
