import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsPageComponent } from './audits-page.component';

describe('AuditsPageComponent', () => {
  let component: AuditsPageComponent;
  let fixture: ComponentFixture<AuditsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
