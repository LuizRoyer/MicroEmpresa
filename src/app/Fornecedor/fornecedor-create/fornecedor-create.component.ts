import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/service/endereco.service';
import { IFornecedor } from '../../../../interface/fornecedor.model';
import { IEndereco } from 'interface/endereco.model';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  createForm: FormGroup;
  Endereco: any = {};

  constructor(private fornecedorService: FornecedorService, private enderecoService: EnderecoService, private fb: FormBuilder, private router: Router) {
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
  addFornecedor(nome, nomeFantasia, status, CNPJ, atividade, telefone, celular, email, observacao, cep,
    logradouro, numero, complemento, bairro, localidade, uf) {

    this.fornecedorService.addFornecedor(nome, nomeFantasia, status, CNPJ, atividade, telefone, celular, email, observacao, cep).subscribe(() => {
    });
    this.enderecoService.addEndereco(cep, logradouro, numero, complemento, bairro, localidade, uf).subscribe(() => {

    });
    
    this.router.navigate(['/fornecedorlist']);
  }

  buscar(cep) {
    this.enderecoService.buscar(cep)
      .then((cep: IEndereco) => {
      this.Endereco = cep

        this.createForm.get('cep').setValue(this.Endereco.cep);
        this.createForm.get('logradouro').setValue(this.Endereco.logradouro);
        this.createForm.get('numero').setValue(this.Endereco.numero);
        this.createForm.get('complemento').setValue(this.Endereco.complemento);
        this.createForm.get('bairro').setValue(this.Endereco.bairro);
        this.createForm.get('localidade').setValue(this.Endereco.localidade);
        this.createForm.get('uf').setValue(this.Endereco.uf);
      })
      .catch((cep: IEndereco) => {
        alert('Nao foi possivel buscar o Cep')
      });
  }


  ngOnInit() {

  }

}
