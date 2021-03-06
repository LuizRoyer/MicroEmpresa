import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produto } from 'classes/Produto';
import { ICliente } from 'interface/cliente.model';
import { IProduto } from 'interface/produto.model';
import { VendaService } from 'src/app/service/venda.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {
  Cliente: any[];
  createForm: FormGroup;
  selecionarCliente: String = '';
  listProdutos = new Array<Produto>();

  iClientes: ICliente[];
  iProdutos: IProduto[];
  displayedColumns = [
    'descricao',
    'valorUnitario',
    'observacao',
    'tamanho',
    'quantidade',
    'action'
  ];

  constructor(
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      nomeCliente: [null],
      desconto: '',
      pagamento: '',
      parcela: ''
    });
  }

  selectChangeHandler(event: any) {
    this.selecionarCliente = event.target.value;
  }

  addVenda(desconto, pagamento, parcela) {
    const data = new Date();
    const mes = data.getMonth() + 1;
    const data1 = data.getDate() + '-' + mes + '-' + data.getFullYear();

    for (let i = 0; i < this.listProdutos.length; i++) {
      this.vendaService
        .addVenda(
          this.selecionarCliente,
          data1,
          desconto,
          pagamento,
          parcela,
          this.listProdutos[i],
          this.listProdutos[i].valorTotal
        )
        .subscribe(() => {

          const id = this.listProdutos[i]._id;
          const qtdPr =
            +this.listProdutos[i].qtdDoProdutoI -
            +this.listProdutos[i].qtdCompra;
          this.produtoService
            .updateQuantidadeProduto(id, qtdPr)
            .subscribe(() => {});
        });
    }

    this.router.navigate(['/vendalist']);
  }

  buscarProduto() {
    this.produtoService.getProduto().subscribe((data: IProduto[]) => {
      this.iProdutos = data;
    });
  }
  deleteProduto(pdescricao) {
    this.listProdutos.forEach((item, index) => {
      if (item.descricao === pdescricao) {
        this.listProdutos.splice(index, 1);
      }
    });

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
  }

  buscarCliente() {
    this.clienteService.getCliente().subscribe((data: ICliente[]) => {
      this.iClientes = data;
    });
  }

  ngOnInit() {
    this.buscarProduto();
    this.buscarCliente();
  }
}
