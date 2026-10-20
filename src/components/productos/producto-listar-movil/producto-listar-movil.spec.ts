import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListarMovil } from './producto-listar-movil';

describe('ProductoListarMovil', () => {
  let component: ProductoListarMovil;
  let fixture: ComponentFixture<ProductoListarMovil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoListarMovil],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoListarMovil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
