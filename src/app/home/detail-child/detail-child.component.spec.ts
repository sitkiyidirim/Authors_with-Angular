import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChildComponent } from './detail-child.component';

describe('DetailChildComponent', () => {
  let component: DetailChildComponent;
  let fixture: ComponentFixture<DetailChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
