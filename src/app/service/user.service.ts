import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequestInterface } from '../model/userRequest.model';
import { Observable } from 'rxjs';
import { UserInterface } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(obj: UserRequestInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>("https://api.freeprojectapi.com/api/BusBooking/login", obj);
  }
}
