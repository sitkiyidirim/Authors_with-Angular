import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryRoutingModule } from './repository-routing';



@NgModule({
  declarations: [
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }
