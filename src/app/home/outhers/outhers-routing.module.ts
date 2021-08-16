import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuthersComponent } from './outhers/outhers.component';

const routes: Routes = [
  {path:'',component:OuthersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuthersRoutingModule { }
