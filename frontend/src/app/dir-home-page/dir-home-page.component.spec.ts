import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirHomePageComponent } from './dir-home-page.component';

describe('DirHomePageComponent', () => {
  let component: DirHomePageComponent;
  let fixture: ComponentFixture<DirHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
