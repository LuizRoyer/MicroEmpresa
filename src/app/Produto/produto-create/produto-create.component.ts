import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private produtoService: ProdutoService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      descricao: ['', Validators.required],
      valorUnitario: '',
      observacao: '',
      marca: '',
      tamanho: '',
      unidade: '',
      tipo: '',
      quantidade: '',
    });
  }

  addProduto(descricao, valorUnitario, observacao, marca, tamanho, unidade, tipo, quantidade) {
    this.produtoService.addProduto(descricao, valorUnitario, observacao, marca, tamanho, unidade, tipo, quantidade).subscribe(() => {

    });

    this.router.navigate(['/produtolist']);
  }



  ngOnInit() {
  }

}
