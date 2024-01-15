import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmentComponent } from './helment.component';

describe('HelmentComponent', () => {
  let component: HelmentComponent;
  let fixture: ComponentFixture<HelmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelmentComponent]
    });
    fixture = TestBed.createComponent(HelmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
