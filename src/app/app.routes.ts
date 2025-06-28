import { Routes } from '@angular/router';
import { LoginModule } from './module/login/login.module';
import { PagnotfoundComponent } from './page/pagnotfound/pagnotfound.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import("./module/login/login.module").then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import("./module/dashboard/dashboard.module").then(m => m.DashboardModule) },
  { path: '***', component: PagnotfoundComponent }
];
