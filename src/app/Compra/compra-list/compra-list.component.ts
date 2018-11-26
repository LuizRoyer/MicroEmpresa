import { Component, OnInit } from '@angular/core';
import { CarteiraService } from 'src/app/service/carteira.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ICarteira } from 'interface/carteira.model';
import { Carteira } from 'classes/Carteira';
import { ProdutoService } from 'src/app/service/produto.service';
@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {
  iCarteira: ICarteira[];
  carteira: Carteira;
  produto: any = {};

  displayedColumns = [
    'nomeFornecedor',
    'data',
    'descricao',
    'quantidade',
    'valorTotal',
    'action'
  ];

  constructor(
    private carteiraService: CarteiraService,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buscarCarteira();
  }

  buscarCarteira() {
    this.carteiraService.getCarteira().subscribe((data: ICarteira[]) => {
      // tslint:disable-next-line:prefer-const
      let listasa: ICarteira[];
      // tslint:disable-next-line:no-shadowed-variable
      this.iCarteira = data;

      let quantidade;
      let valor;

      for (let i = 0; i < data.length; i++) {
        listasa = data;

        quantidade = listasa[i].Produto[0].qtdCompra;
        valor = listasa[i].Produto[0].valorTotal;

        this.carteira = new Carteira(
          listasa[i].nomeFornecedor,
          listasa[i].dataCompra,
          quantidade,
          valor
        );

        /*
      for (let j = 0; j < data.length; j++) {
        this.carteira = new Carteira(
          listasa[j].nomeFornecedor,
          listasa[j].dataCompra,
          quantidade,
          valor
        );
      }*/
      }
    });
  }

  editarCarteira(id) {
    this.router.navigate([`/carteiraedit/${id}`]);
  }
  deleteCarteira(id, idProduto, qtdProduto) {
    this.carteiraService.deleteCarteira(id).subscribe(() => {
      this.produtoService.getProdutoById(idProduto).subscribe(data => {
        this.produto = data;
        const quantidade = +this.produto.quantidade - +qtdProduto;
        this.produtoService
          .updateQuantidadeProduto(idProduto, quantidade)
          .subscribe(() => {});
      });
      this.buscarCarteira();
    });
  }
}
