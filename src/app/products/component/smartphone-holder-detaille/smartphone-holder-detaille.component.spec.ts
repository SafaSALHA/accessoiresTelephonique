import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneHolderDetailleComponent } from './smartphone-holder-detaille.component';

describe('SmartphoneHolderDetailleComponent', () => {
  let component: SmartphoneHolderDetailleComponent;
  let fixture: ComponentFixture<SmartphoneHolderDetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphoneHolderDetailleComponent]
    });
    fixture = TestBed.createComponent(SmartphoneHolderDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
