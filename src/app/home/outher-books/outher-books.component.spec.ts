import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutherBooksComponent } from './outher-books.component';

describe('OutherBooksComponent', () => {
  let component: OutherBooksComponent;
  let fixture: ComponentFixture<OutherBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutherBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutherBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
