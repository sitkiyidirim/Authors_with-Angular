import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuthersComponent } from './outhers.component';

describe('OuthersComponent', () => {
  let component: OuthersComponent;
  let fixture: ComponentFixture<OuthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
