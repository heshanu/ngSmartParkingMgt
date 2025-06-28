import { Component } from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
