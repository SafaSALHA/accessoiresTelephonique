import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmentDetailleComponent } from './helment-detaille.component';

describe('HelmentDetailleComponent', () => {
  let component: HelmentDetailleComponent;
  let fixture: ComponentFixture<HelmentDetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelmentDetailleComponent]
    });
    fixture = TestBed.createComponent(HelmentDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
