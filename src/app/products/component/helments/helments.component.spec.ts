import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmentsComponent } from './helments.component';

describe('HelmentsComponent', () => {
  let component: HelmentsComponent;
  let fixture: ComponentFixture<HelmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelmentsComponent]
    });
    fixture = TestBed.createComponent(HelmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
