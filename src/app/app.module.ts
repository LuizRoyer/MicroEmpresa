import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router } from '@angular/router';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule, MatOptionModule, MatIconModule, MatCardModule, MatDividerModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FornecedorEditComponent } from './Fornecedor/fornecedor-edit/fornecedor-edit.component';
import { FornecedorCreateComponent } from './Fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorListComponent } from './Fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorService } from './service/fornecedor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from './service/endereco.service';
import { ProdutoListComponent } from './Produto/produto-list/produto-list.component';
import { ProdutoEditComponent } from './Produto/produto-edit/produto-edit.component';
import { ProdutoCreateComponent } from './Produto/produto-create/produto-create.component';
import { ClienteListComponent } from './Cliente/cliente-list/cliente-list.component';
import { ClienteEditComponent } from './Cliente/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './Cliente/cliente-create/cliente-create.component';
import { VendaListComponent } from './Venda/venda-list/venda-list.component';
import { VendaEditComponent } from './Venda/venda-edit/venda-edit.component';
import { VendaCreateComponent } from './Venda/venda-create/venda-create.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { CompraListComponent } from './Compra/compra-list/compra-list.component';
import { CompraCreateComponent } from './Compra/compra-create/compra-create.component';
import { CompraEditComponent } from './Compra/compra-edit/compra-edit.component';

// npm rum dev  roda o aplicativo
const routes: Routes = [
  { path: 'fornecedorcreate', component: FornecedorCreateComponent },
  { path: 'fornecedoredit/:id', component: FornecedorEditComponent },
  { path: 'fornecedorlist', component: FornecedorListComponent },
  { path: 'produtocreate', component: ProdutoCreateComponent },
  { path: 'produtoedit/:id', component: ProdutoEditComponent },
  { path: 'produtolist', component: ProdutoListComponent },  
  { path: '', redirectTo: 'fornecedorlist', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    FornecedorCreateComponent,
    FornecedorEditComponent,
    FornecedorListComponent,
    ProdutoListComponent,
    ProdutoEditComponent,
    ProdutoCreateComponent,
    ClienteListComponent,
    ClienteEditComponent,
    ClienteCreateComponent,
    VendaListComponent,
    VendaEditComponent,
    VendaCreateComponent,
    MenuComponent,
    CompraListComponent,
    CompraCreateComponent,
    CompraEditComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,   
    HttpModule,
    FormsModule
  ],
  providers: [FornecedorService,EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
