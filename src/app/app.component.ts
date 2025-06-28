import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './module/material/material.module';
import { ButtonComponent } from './compoemts/button/button.component'
import { LoginModule } from './module/login/login.module';
import { HeaderComponent } from './compoemts/header/header.component';
import { DashboardModule } from './module/dashboard/dashboard.module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule,
    LoginModule, HeaderComponent, DashboardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parkingreservation';
}
