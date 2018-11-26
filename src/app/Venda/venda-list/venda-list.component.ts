import { Component, OnInit } from '@angular/core';
import { IVenda } from 'interface/venda.model';
import { VendaService } from 'src/app/service/venda.service';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {
  iVenda: IVenda[];
  produto: any = {};

  displayedColumns = [
    'nomeCliente',
    'dataVenda',
    'descricao',
    'quantidade',
    'valorTotal',
    'pagamento',
    'action'
  ];

  constructor(
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

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
  deleteVenda(id, idProduto, qtdProduto) {
    this.vendaService.deleteVenda(id).subscribe(() => {
      this.produtoService.getProdutoById(idProduto).subscribe(data => {
        this.produto = data;
        const quantidade = +this.produto.quantidade + +qtdProduto;
        this.produtoService
          .updateQuantidadeProduto(idProduto, quantidade)
          .subscribe(() => {});
      });


      this.buscarVendas();
    });
  }
}
