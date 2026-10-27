import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeLayout } from './mensaje-layout';

describe('MensajeLayout', () => {
  let component: MensajeLayout;
  let fixture: ComponentFixture<MensajeLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
