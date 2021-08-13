import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginControl } from '../login-control';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', canActivate :[LoginControl], component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
