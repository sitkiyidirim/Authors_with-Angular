import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BooksallComponent } from './booksall/booksall.component';
import { OutherBooksComponent } from './outher-books/outher-books.component';
import { HttpClientModule } from '@angular/common/http';
import { BoksgetService } from './booksall/boksget.service';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { DetailChildComponent } from './detail-child/detail-child.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { LibrarianLoginComponent } from './librarian-login/librarian-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibrarianLoginControl } from './librarian-login-control';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HomeComponent,
    BooksallComponent,
    OutherBooksComponent,
    DetailBookComponent,
    DetailChildComponent,
    LibrarianComponent,
    LibrarianLoginComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  providers: [BoksgetService,LibrarianLoginControl],
  exports: [HomeComponent]
})
export class HomeModule { }
