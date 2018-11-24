import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { Router } from '@angular/router';
import { IEndereco } from 'interface/endereco.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  createForm: FormGroup;
  Endereco: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(
    private clienteService: ClienteService,
    private enderecoService: EnderecoService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      nome: ['', Validators.required],
      CPF: '',
      dataNascimento: '',
      telefone: '',
      celular: '',
      email: '',
      cep: ['', Validators.required],
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: ''
    });
  }
  addCliente(
    nome,
    CPF,
    dataNascimento,
    telefone,
    celular,
    email,
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    localidade,
    uf
  ) {
    this.enderecoService
      .addEndereco(
        nome,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        localidade,
        uf
      )
      .subscribe(() => {});

    this.clienteService
      .addCliente(nome, CPF, dataNascimento, telefone, celular, email, cep)
      .subscribe(() => {});

    this.router.navigate(['/clientelist']);
  }

  buscar(cep) {
    this.enderecoService
      .buscar(cep)
      .then((ceps: IEndereco) => {
        this.Endereco = ceps;

        this.createForm.get('cep').setValue(this.Endereco.cep);
        this.createForm.get('logradouro').setValue(this.Endereco.logradouro);
        this.createForm.get('numero').setValue(this.Endereco.numero);
        this.createForm.get('complemento').setValue(this.Endereco.complemento);
        this.createForm.get('bairro').setValue(this.Endereco.bairro);
        this.createForm.get('localidade').setValue(this.Endereco.localidade);
        this.createForm.get('uf').setValue(this.Endereco.uf);
      })
      .catch((ceps: IEndereco) => {
        alert('Nao foi possivel buscar o Cep');
      });
  }

  ngOnInit() {}
}
