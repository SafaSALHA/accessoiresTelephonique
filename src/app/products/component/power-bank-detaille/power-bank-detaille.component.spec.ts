import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBankDetailleComponent } from './power-bank-detaille.component';

describe('PowerBankDetailleComponent', () => {
  let component: PowerBankDetailleComponent;
  let fixture: ComponentFixture<PowerBankDetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerBankDetailleComponent]
    });
    fixture = TestBed.createComponent(PowerBankDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
