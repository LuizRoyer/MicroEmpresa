import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ICliente } from 'interface/cliente.model';
import { EnderecoService } from 'src/app/service/endereco.service';
import { IEndereco } from 'interface/endereco.model';
import { createPipe } from '@angular/compiler/src/core';
import{EnderecoCliente} from 'classes/EnderecoCliente';
import{Endereco} from 'classes/Endereco';
import{Cliente} from 'classes/Cliente';
import {IEnderecoCliente} from 'interface/enderecoCliente.model';
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
pEndereco :Endereco[];
pCliente :Cliente[];

  

  displayedColumns = ['nome', 'CPF', 'dataNascimento', 'telefone', 'celular', 'email',
    'cep', 'logradouro', 'numero', 'complemento', 'bairro', 'localidade', 'uf', 'action'];


  constructor(private clienteService: ClienteService, private enderecoService: EnderecoService, private router: Router) { }

  ngOnInit() {
    this.buscarClientes();
  }


  buscarClientes() {

   
      this.clienteService.getCliente().subscribe((data: Cliente[]) => {
      this.pCliente = data;
      console.log('Buscando Clientes');
      console.log(this.iClientes);

      for (var i = 0; i < data.length; i++) {
        this.enderecoService.getIdEndereco(this.pCliente[i].cep, this.pCliente[i].nome).subscribe((data1: Endereco[]) => {
          this.pEndereco = data1;
          console.log('Buscando Endereços');
          console.log(this.iEnderecos);

         // this.clieteEndereco[i-1].cep = new Endereco(this.pCliente[i].nome,this.pEndereco[i].cep,
         //   this.pEndereco[i].logradouro, this.pEndereco[i].numero, this.pEndereco[i].complemento,
         //    this.pEndereco[i].bairro, this.pEndereco[i].localidade, this.pEndereco[i].uf);

          //this.clieteEndereco[i].cliente = new Cliente(this.pCliente[i].nome,this.pCliente[i].CPF,
           //  this.pCliente[i].dataNascimento, this.pCliente[i].telefone, this.pCliente[i].celular, 
            // this.pCliente[i].email, this.pCliente[i].cep );
         
             this.clieteEndereco = new EnderecoCliente(this.pEndereco, this.pCliente);
          this.iEnderecoClientes[i-1].cep = this.clieteEndereco.cep;
          this.iEnderecoClientes[i-1].cliente = this.clieteEndereco.cliente;
        });        
       console.log(this.clieteEndereco);
        
         
      }
    
    });
    
   
   
  }

  editarCliente(id) {
    this.router.navigate([`/clienteedit/${id}`]);
  }

  deleteCliente(id, cep, proprietario) {

    this.enderecoService.deleteEndereco(cep, proprietario).subscribe(() => {
      this.clienteService.deleteCliente(id).subscribe(() => {
        this.buscarClientes();
      });
    });
  }

}