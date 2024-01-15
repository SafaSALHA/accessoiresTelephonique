import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphoneComponent } from './earphone.component';

describe('EarphoneComponent', () => {
  let component: EarphoneComponent;
  let fixture: ComponentFixture<EarphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarphoneComponent]
    });
    fixture = TestBed.createComponent(EarphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
