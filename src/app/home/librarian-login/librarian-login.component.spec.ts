import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianLoginComponent } from './librarian-login.component';

describe('LibrarianLoginComponent', () => {
  let component: LibrarianLoginComponent;
  let fixture: ComponentFixture<LibrarianLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
