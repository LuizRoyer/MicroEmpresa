import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { IProduto } from 'interface/produto.model';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
  id: String;
  iproduto: any = {};
  updateForm: FormGroup;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.createForm();

  }

  createForm() {
    this.updateForm = this.fb.group({
      descricao: ['', Validators.required],
      valorUnitario: '',
      observacao: '',
      marca: '',
      tamanho: '',
      unidade: '',
      tipo: '',
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id,
        this.produtoService.getProdutoById(this.id).subscribe(res => {
          this.iproduto = res;
          this.updateForm.get('descricao').setValue(this.iproduto.descricao);
          this.updateForm.get('valorUnitario').setValue(this.iproduto.valorUnitario);
          this.updateForm.get('observacao').setValue(this.iproduto.observacao);
          this.updateForm.get('marca').setValue(this.iproduto.marca);
          this.updateForm.get('tamanho').setValue(this.iproduto.tamanho);
          this.updateForm.get('unidade').setValue(this.iproduto.unidade);
          this.updateForm.get('tipo').setValue(this.iproduto.tipo);

        });
    });
  }

  updateProduto(descricao, valorUnitario, observacao, marca, tamanho, unidade, tipo) {
    this.produtoService.updateProduto(this.id, descricao, valorUnitario, observacao, marca, tamanho, unidade, tipo).subscribe(() => {
      this.snackBar.open('Produto Atualizado com sucesso', 'Ok', {
        duration: 3000
      });
    });
  }
}