import { Component, OnInit } from '@angular/core';
import { CarteiraService } from 'src/app/service/carteira.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICarteira } from 'interface/carteira.model';
import { ProdutoService } from 'src/app/service/produto.service';
import { IProduto } from 'interface/produto.model';
import { Produto } from 'classes/Produto';
import { IFornecedor } from 'interface/fornecedor.model';
import { FornecedorService } from 'src/app/service/fornecedor.service';
@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {
  Fornecedor: any[];
  createForm: FormGroup;
  selecionarFornecedor: String = '';

  listProdutos = new Array<Produto>();

  iFornecedores: IFornecedor[];
  iProdutos: IProduto[];
  displayedColumns = [
    'descricao',
    'valorUnitario',
    'observacao',
    'tamanho',
    'action'
  ];

  constructor(
    private carteiraService: CarteiraService,
    private produtoService: ProdutoService,
    private forncedorService: FornecedorService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      nomeFornecedor: [null]
    });
  }

  selectChangeHandler(event: any) {
    this.selecionarFornecedor = event.target.value;
  }

  addCarteira() {
    const data = new Date();
    const mes = data.getMonth() + 1;
    const data1 = data.getDate() + '-' + mes + '-' + data.getFullYear();

    for (let i = 0; i < this.listProdutos.length; i++) {
      this.carteiraService
        .addCarteira(
          this.selecionarFornecedor,
          this.listProdutos[i],
          data1,
          this.listProdutos[i].qtdCompra,
          this.listProdutos[i].valorUnitario
        )
        .subscribe(() => {
          const id = this.listProdutos[i]._id;
          const qtdPr =
            +this.listProdutos[i].qtdDoProdutoI +
            +this.listProdutos[i].qtdCompra;
          this.produtoService
            .updateQuantidadeProduto(id, qtdPr)
            .subscribe(() => {});
        });
    }

    this.router.navigate(['/compralist']);
  }

  /*
  removerProduto(id, nomeProduto) {
    this.carteiraService
      .deleteCarteiraProduto(id, nomeProduto)
      .subscribe(() => {
        console.log(this.carteiraService);
      });
  }*/

  buscarProduto() {
    this.produtoService.getProduto().subscribe((data: IProduto[]) => {
      this.iProdutos = data;
      console.log('Buscando Produtos');
      console.log(this.iProdutos[0]._id);
    });
  }
  deleteProduto(pdescricao) {
    this.listProdutos.forEach((item, index) => {
      if (item.descricao === pdescricao) {
        this.listProdutos.splice(index, 1);
      }
      console.log(index);
    });

    console.log(this.listProdutos);
  }

  addProdtuto(
    id,
    pdescricao,
    pvalorUnitario,
    pobservacao,
    ptamanho,
    pqtdCompra,
    qtdDoProdutoI
  ) {
    this.listProdutos.push(
      new Produto(
        id,
        pdescricao,
        pvalorUnitario,
        pobservacao,
        ptamanho,
        pqtdCompra,
        pvalorUnitario * pqtdCompra,
        qtdDoProdutoI
      )
    );
    console.log('Cadastro efetuado com sucesso');
    console.log(this.listProdutos);
  }

  buscarForncedores() {
    this.forncedorService
      .getFornecedorAtivo()
      .subscribe((data: IFornecedor[]) => {
        this.iFornecedores = data;
        console.log('Buscando Fornecedor');
        console.log(this.iFornecedores);
      });
  }

  ngOnInit() {
    this.buscarProduto();
    this.buscarForncedores();
  }
}
