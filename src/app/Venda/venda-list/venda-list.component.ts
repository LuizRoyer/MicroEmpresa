import { Component, OnInit } from '@angular/core';
import { IVenda } from 'interface/venda.model';
import { VendaService } from 'src/app/service/venda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {

  iVenda: IVenda[];

 displayedColumns = [
  'nomeCliente', 'dataVenda','descricao','quantidade','valorTotal','pagamento', 'action'];

  constructor(private vendaService: VendaService,
    private router: Router) { }

    ngOnInit() {
      this.buscarVendas();
    }

    buscarVendas() {
      this.vendaService.getVenda().subscribe((data: IVenda[]) => {
        this.iVenda = data;
      });
    }
  
    editarVenda(id) {
      this.router.navigate([`/vendaedit/${id}`]);
    }
    deleteVenda(id) {
      this.vendaService.deleteVenda(id).subscribe(() => {
        this.buscarVendas();
      });
    }
  }
  