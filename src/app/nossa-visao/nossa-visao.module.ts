import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NossaVisaoComponent } from './nossa-visao.component';
import { NossaVisaoRoutingModule } from './nossa-visao-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NossaVisaoRoutingModule
  ],
  declarations: [
    NossaVisaoComponent
  ]
})
export class NossaVisaoModule { }
