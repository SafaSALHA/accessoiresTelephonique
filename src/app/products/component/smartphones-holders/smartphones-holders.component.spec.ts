import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesHoldersComponent } from './smartphones-holders.component';

describe('SmartphonesHoldersComponent', () => {
  let component: SmartphonesHoldersComponent;
  let fixture: ComponentFixture<SmartphonesHoldersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphonesHoldersComponent]
    });
    fixture = TestBed.createComponent(SmartphonesHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
