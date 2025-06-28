import { Component } from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';
import { NgprimeModule } from '../../module/ngprime/ngprime.module';

@Component({
  selector: 'app-header',
  imports: [MaterialModule, NgprimeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // In component.ts
  isDarkMode(): boolean {
    return document.documentElement.classList.contains('my-app-dark');
  }
}
