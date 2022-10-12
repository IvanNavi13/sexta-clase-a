import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one/one.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [OneComponent, NotFoundComponent],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class FirstModule { }
