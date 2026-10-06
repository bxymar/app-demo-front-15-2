import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListar } from './producto-listar';

describe('ProductoListar', () => {
  let component: ProductoListar;
  let fixture: ComponentFixture<ProductoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
