import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
  ],
  imports: [
    UsersComponent, AdminComponent,
    CommonModule,
    UsersRoutingModule
  ], exports: []
})
export class UsersModule { }
