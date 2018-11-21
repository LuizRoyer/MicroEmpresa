import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router } from '@angular/router';
import{MatTableDataSource}from  '@angular/material';
import { IProduto} from 'interface/produto.model';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  iProdutos: IProduto[];
  displayedColumns = ['descricao', 'valorUnitario', 'observacao', 'marca', 'tamanho', 'unidade', 'tipo','quantidade', 'action'];

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.buscarProduto();
  }

  buscarProduto() {
    this.produtoService.getProduto().subscribe((data:IProduto[]) => {
      this.iProdutos = data;
      console.log('Buscando Produtos');
      console.log(this.iProdutos);
    });
  }
  editarProduto(id) {
    this.router.navigate([`/produtoedit/${id}`]);
  }
  deleteProduto(id) {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.buscarProduto();
    });
  }


}