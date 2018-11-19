import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaEditComponent } from './venda-edit.component';

describe('VendaEditComponent', () => {
  let component: VendaEditComponent;
  let fixture: ComponentFixture<VendaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
