import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { UserRequestInterface } from '../../../model/userRequest.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: false
})
export class UserComponent {

  constructor(private userService: UserService) { }

  loginUser(user: UserRequestInterface) {

  }
}
