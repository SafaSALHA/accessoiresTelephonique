import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphoneDetailleComponent } from './earphone-detaille.component';

describe('EarphoneDetailleComponent', () => {
  let component: EarphoneDetailleComponent;
  let fixture: ComponentFixture<EarphoneDetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarphoneDetailleComponent]
    });
    fixture = TestBed.createComponent(EarphoneDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
