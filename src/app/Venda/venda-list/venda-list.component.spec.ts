import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaListComponent } from './venda-list.component';

describe('VendaListComponent', () => {
  let component: VendaListComponent;
  let fixture: ComponentFixture<VendaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
