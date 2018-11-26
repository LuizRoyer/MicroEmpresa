import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEndereco } from 'interface/endereco.model';
import { MatSnackBar } from '@angular/material';
import { EnderecoService } from '../../service/endereco.service';

@Component({
  selector: 'app-fornecedor-edit',
  templateUrl: './fornecedor-edit.component.html',
  styleUrls: ['./fornecedor-edit.component.css']
})
export class FornecedorEditComponent implements OnInit {
  id: String;
  idCep: String;
  nomeFornecedor: String;
  ifornecedor: any = {};
  iendereco: any = {};
  Endereco: any = {};
  updateForm: FormGroup;

  constructor(
    private fornecedorService: FornecedorService,
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      (this.id = params.id),
        this.fornecedorService.getFornecedorById(this.id).subscribe(res => {
          this.ifornecedor = res;
          this.updateForm.get('nome').setValue(this.ifornecedor.nome);
          this.updateForm
            .get('nomeFantasia')
            .setValue(this.ifornecedor.nomeFantasia);
          this.updateForm.get('status').setValue(this.ifornecedor.status);
          this.updateForm.get('CNPJ').setValue(this.ifornecedor.CNPJ);
          this.updateForm.get('atividade').setValue(this.ifornecedor.atividade);
          this.updateForm.get('telefone').setValue(this.ifornecedor.telefone);
          this.updateForm.get('celular').setValue(this.ifornecedor.celular);
          this.updateForm.get('email').setValue(this.ifornecedor.email);
          this.updateForm
            .get('observacao')
            .setValue(this.ifornecedor.observacao);
          this.updateForm.get('cep').setValue(this.ifornecedor.cep);
          this.idCep = this.ifornecedor.cep;
          this.nomeFornecedor = this.ifornecedor.nome;
          this.enderecoService
            .getIdEndereco(this.ifornecedor.cep, this.ifornecedor.nome)
            .subscribe(ress => {
              this.iendereco = ress;
              this.updateForm.get('cep').setValue(this.iendereco.cep);
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

  updateFornecedor(
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
      .updateFornecedor(
        this.id,
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
      .updateEndereco(
        this.nomeFornecedor,
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
        this.router.navigate(['/fornecedorlist']);
        this.snackBar.open('Fornecedor Atualizado com sucesso', 'Ok', {
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
