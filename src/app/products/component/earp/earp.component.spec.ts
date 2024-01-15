import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarpComponent } from './earp.component';

describe('EarpComponent', () => {
  let component: EarpComponent;
  let fixture: ComponentFixture<EarpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarpComponent]
    });
    fixture = TestBed.createComponent(EarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
