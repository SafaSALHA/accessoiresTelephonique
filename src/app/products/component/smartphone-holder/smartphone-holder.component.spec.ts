import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneHolderComponent } from './smartphone-holder.component';

describe('SmartphoneHolderComponent', () => {
  let component: SmartphoneHolderComponent;
  let fixture: ComponentFixture<SmartphoneHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphoneHolderComponent]
    });
    fixture = TestBed.createComponent(SmartphoneHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
