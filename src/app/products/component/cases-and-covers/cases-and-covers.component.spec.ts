import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesAndCoversComponent } from './cases-and-covers.component';

describe('CasesAndCoversComponent', () => {
  let component: CasesAndCoversComponent;
  let fixture: ComponentFixture<CasesAndCoversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesAndCoversComponent]
    });
    fixture = TestBed.createComponent(CasesAndCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
