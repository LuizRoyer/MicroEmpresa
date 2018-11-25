import { Component, OnInit } from '@angular/core';
import { CarteiraService } from 'src/app/service/carteira.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import { ICarteira} from 'interface/carteira.model';


@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  iCarteira: ICarteira[];
  displayedColumns = ['nomeFornecedor', 'data', 'quantidade', 'valorTotal', 'action'];

  constructor(private carteiraService: CarteiraService, private router: Router) { }


  ngOnInit() {
    this.buscarCarteira();
  }

  buscarCarteira() {
    this.carteiraService.getCarteira().subscribe((data: ICarteira[]) => {
      this.iCarteira = data;
      console.log(this.iCarteira);
    });
    
  }
  editarCarteira(id) {
    this.router.navigate([`/carteiraedit/${id}`]);
  }
  deleteCarteira(fornecedor,data) {
    this.carteiraService.deleteCarteira(nomeFornecedor,dataCompra).subscribe(() => {
      this.buscarCarteira();
    });
  }


}

