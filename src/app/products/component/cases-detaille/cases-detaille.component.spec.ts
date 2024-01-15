import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDetailleComponent } from './cases-detaille.component';

describe('CasesDetailleComponent', () => {
  let component: CasesDetailleComponent;
  let fixture: ComponentFixture<CasesDetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesDetailleComponent]
    });
    fixture = TestBed.createComponent(CasesDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
