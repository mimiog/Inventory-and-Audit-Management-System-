import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudHomePageComponent } from './aud-home-page.component';

describe('AudHomePageComponent', () => {
  let component: AudHomePageComponent;
  let fixture: ComponentFixture<AudHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
