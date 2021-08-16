import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OuthersRoutingModule } from './outhers-routing.module';
import { OuthersComponent } from './outhers/outhers.component';
import { OutherService } from './outher.service';


@NgModule({
  declarations: [
    OuthersComponent
  ],
  imports: [
    CommonModule,
    OuthersRoutingModule
  ],
  providers: [OutherService]
})
export class OuthersModule { }
