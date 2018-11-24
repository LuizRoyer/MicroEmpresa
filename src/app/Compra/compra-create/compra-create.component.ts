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

  createForm: FormGroup;
  Carteira: any = {};

  listProdutos = new Array<Produto>();

  iFornecedores:IFornecedor[];
  iProdutos: IProduto[];
  displayedColumns = ['descricao', 'valorUnitario', 'observacao', 'tamanho','quantidade','action'];

  constructor(private carteiraService: CarteiraService, private produtoService: ProdutoService,private forncedorService: FornecedorService,private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({

      nomeFornecedor: ['', Validators.required],

    });
  }
  addCarteira(nomeFornecedor) {

    for (var i = 0; i < this.listProdutos.length; i++) {

      this.carteiraService.addCarteira(nomeFornecedor, this.listProdutos[i], new Date(), status, this.listProdutos[i].qtdCompra, this.listProdutos[i].valorUnitario).subscribe(() => {
      });
     
    }

    this.router.navigate(['/fornecedorlist']);
  }

  removerProduto(id, nomeProduto) {
    this.carteiraService.deleteCarteiraProduto(id, nomeProduto).subscribe(() => {
      console.log(this.carteiraService);
    });
  }

  buscarProduto() {
    this.produtoService.getProduto().subscribe((data: IProduto[]) => {
      this.iProdutos = data;
      console.log('Buscando Produtos');
      console.log(this.iProdutos);
    });
  }
  deleteProduto(pdescricao) {
    
    this.listProdutos.forEach( (item, index) => {
      if(item === pdescricao) this.listProdutos.splice(index,0);

    });

    console.log(this.listProdutos);
  }

  addProdtuto(pdescricao, pvalorUnitario, pobservacao,ptamanho, pqtdCompra) {

    this.listProdutos.push(new Produto(pdescricao, pvalorUnitario, pobservacao, ptamanho,pqtdCompra, (pvalorUnitario * pqtdCompra)));
    console.log("Cadastro efetuado com sucesso");
    console.log(this.listProdutos);
  }

  buscarForncedores() {
    this.forncedorService.getFornecedor().subscribe((data: IFornecedor[]) => {
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
