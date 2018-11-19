import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorEditComponent } from './fornecedor-edit.component';

describe('FornecedorEditComponent', () => {
  let component: FornecedorEditComponent;
  let fixture: ComponentFixture<FornecedorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
