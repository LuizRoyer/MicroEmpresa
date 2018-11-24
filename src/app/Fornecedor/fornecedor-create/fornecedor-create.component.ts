import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnderecoService } from '../../service/endereco.service';
import { IEndereco } from 'interface/endereco.model';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
  createForm: FormGroup;
  Endereco: any = {};

  constructor(
    private fornecedorService: FornecedorService,
    private enderecoService: EnderecoService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      nome: ['', Validators.required],
      nomeFantasia: '',
      status: '',
      CNPJ: '',
      atividade: '',
      telefone: '',
      celular: '',
      email: '',
      observacao: '',
      cep: ['', Validators.required],
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: ''
    });
  }
  addFornecedor(
    nome,
    nomeFantasia,
    status,
    CNPJ,
    atividade,
    telefone,
    celular,
    email,
    observacao,
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    localidade,
    uf
  ) {
    this.fornecedorService
      .addFornecedor(
        nome,
        nomeFantasia,
        status,
        CNPJ,
        atividade,
        telefone,
        celular,
        email,
        observacao,
        cep
      )
      .subscribe(() => {});

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

    this.router.navigate(['/fornecedorlist']);
  }

  buscar(cep) {
    this.enderecoService
      .buscar(cep)
      .then((cepd: IEndereco) => {
        this.Endereco = cep;

        this.createForm.get('cep').setValue(cepd.cep);
        this.createForm.get('logradouro').setValue(cepd.logradouro);
        this.createForm.get('numero').setValue(cepd.numero);
        this.createForm.get('complemento').setValue(cepd.complemento);
        this.createForm.get('bairro').setValue(cepd.bairro);
        this.createForm.get('localidade').setValue(cepd.localidade);
        this.createForm.get('uf').setValue(cepd.uf);
      })
      .catch((cepd: IEndereco) => {
        alert('Nao foi possivel buscar o Cep');
      });
  }

  ngOnInit() {}
}
