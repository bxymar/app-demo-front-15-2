import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilLayout } from './movil-layout';

describe('MovilLayout', () => {
  let component: MovilLayout;
  let fixture: ComponentFixture<MovilLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovilLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(MovilLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
