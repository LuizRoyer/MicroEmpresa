import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { IEndereco } from 'interface/endereco.model';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  id: String;
  idCep: String;
  nomeCliente: String;
  iCliente: any = {};
  iendereco: any = {};
  Endereco: any = {};
  updateForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.id = params.id),
        this.clienteService.getClienteById(this.id).subscribe(res => {
          this.iCliente = res;
          this.updateForm.get('nome').setValue(this.iCliente.nome);
          this.updateForm.get('CPF').setValue(this.iCliente.CPF);
          this.updateForm
            .get('dataNascimento')
            .setValue(this.iCliente.dataNascimento);
          this.updateForm.get('telefone').setValue(this.iCliente.telefone);
          this.updateForm.get('celular').setValue(this.iCliente.celular);
          this.updateForm.get('email').setValue(this.iCliente.email);
          this.updateForm.get('cep').setValue(this.iCliente.cep);
          this.idCep = this.iCliente.cep;
          this.nomeCliente = this.iCliente.nome;
          this.enderecoService
            .getIdEndereco(this.iCliente.cep, this.iCliente.nome)
            .subscribe(ress => {
              this.iendereco = ress;
              this.updateForm
                .get('logradouro')
                .setValue(this.iendereco.logradouro);
              this.updateForm.get('numero').setValue(this.iendereco.numero);
              this.updateForm
                .get('complemento')
                .setValue(this.iendereco.complemento);
              this.updateForm.get('bairro').setValue(this.iendereco.bairro);
              this.updateForm
                .get('localidade')
                .setValue(this.iendereco.localidade);
              this.updateForm.get('uf').setValue(this.iendereco.uf);
            });
        });
    });
  }

  updateCliente(
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
    this.clienteService
      .updateCliente(
        this.id,
        nome,
        CPF,
        dataNascimento,
        telefone,
        celular,
        email,
        cep
      )
      .subscribe(() => {});

    this.enderecoService
      .updateEndereco(
        this.nomeCliente,
        nome,
        this.idCep,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        localidade,
        uf
      )
      .subscribe(() => {
        this.router.navigate(['/clientelist']);
        this.snackBar.open('Cliente Atualizado com sucesso', 'Ok', {
          duration: 3000
        });
      });
  }

  buscar(cep) {
    this.enderecoService
      .buscar(cep)
      .then((ceps: IEndereco) => {
        this.Endereco = ceps;

        this.updateForm.get('cep').setValue(this.Endereco.cep);
        this.updateForm.get('logradouro').setValue(this.Endereco.logradouro);
        this.updateForm.get('numero').setValue(this.Endereco.numero);
        this.updateForm.get('complemento').setValue(this.Endereco.complemento);
        this.updateForm.get('bairro').setValue(this.Endereco.bairro);
        this.updateForm.get('localidade').setValue(this.Endereco.localidade);
        this.updateForm.get('uf').setValue(this.Endereco.uf);
      })
      .catch((ceps: IEndereco) => {
        alert('Nao foi possivel buscar o Cep');
      });
  }
}
