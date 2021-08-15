import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginControl } from '../login-control';
import { BooksallComponent } from './booksall/booksall.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { HomeComponent } from './home/home.component';
import { LibrarianLoginControl } from './librarian-login-control';
import { LibrarianLoginComponent } from './librarian-login/librarian-login.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { OutherBooksComponent } from './outher-books/outher-books.component';

const routes: Routes = [
  {path:'home', canActivate :[LoginControl], component: HomeComponent, 
     children : [
          {path:'',component:BooksallComponent},
          {path:'booksall', component:BooksallComponent},
          {path:'outherbooks/:name',component:OutherBooksComponent},
          {path:'detailsbook/:id',component:DetailBookComponent},
          {path:'librarian', component:LibrarianComponent},
          {path:'librarilogin',component:LibrarianLoginComponent}
     ]
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
