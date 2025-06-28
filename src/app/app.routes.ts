import { Routes } from '@angular/router';
import { LoginModule } from './module/login/login.module';

export const routes: Routes = [
  { path: '', loadChildren: () => import("./module/login/login.module").then(m => m.LoginModule) }
];
