import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksallComponent } from './booksall.component';

describe('BooksallComponent', () => {
  let component: BooksallComponent;
  let fixture: ComponentFixture<BooksallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
