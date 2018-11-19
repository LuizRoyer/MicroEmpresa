import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCreateComponent } from './compra-create.component';

describe('CompraCreateComponent', () => {
  let component: CompraCreateComponent;
  let fixture: ComponentFixture<CompraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
