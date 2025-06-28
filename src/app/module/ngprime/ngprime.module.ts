import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ToastModule,
    RippleModule
  ],
  exports: [
    CardModule, ButtonModule, ToastModule, RippleModule
  ]
})
export class NgprimeModule { }
