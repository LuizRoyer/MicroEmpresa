import { Component, OnInit } from '@angular/core';
import { CarteiraService } from 'src/app/service/carteira.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ICarteira } from 'interface/carteira.model';
import { Carteira } from 'classes/Carteira';
@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {
  iCarteira: ICarteira[];
  carteira: Carteira;

  displayedColumns = [
    'nomeFornecedor',
    'data',
    'quantidade',
    'valorTotal',
    'action'
  ];

  constructor(
    private carteiraService: CarteiraService,
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
      console.log(data);

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
      console.log(Carteira);
    });
  }

  editarCarteira(id) {
    this.router.navigate([`/carteiraedit/${id}`]);
  }
  deleteCarteira(id) {
    this.carteiraService.deleteCarteira(id).subscribe(() => {
      this.buscarCarteira();
    });
  }
}
