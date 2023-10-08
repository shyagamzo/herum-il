import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentionSelectionComponent } from './intention-selection.component';

describe('IntentionSelectionComponent', () => {
  let component: IntentionSelectionComponent;
  let fixture: ComponentFixture<IntentionSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IntentionSelectionComponent]
    });
    fixture = TestBed.createComponent(IntentionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
