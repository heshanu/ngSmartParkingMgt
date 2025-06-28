import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersModule } from './module/users/users.module';
import { MaterialModule } from './module/material/material.module';
import { ButtonComponent } from './compoemts/button/button.component'
import { LoginModule } from './module/login/login.module';
import { HeaderComponent } from './compoemts/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsersModule, MaterialModule,
    LoginModule, HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parkingreservation';
}
