import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEliminar } from './producto-eliminar';

describe('ProductoEliminar', () => {
  let component: ProductoEliminar;
  let fixture: ComponentFixture<ProductoEliminar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoEliminar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoEliminar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
