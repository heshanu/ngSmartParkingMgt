import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserRequestInterface } from '../../model/userRequest.model';
import { UserInterface } from '../../model/user.model';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false, providers: [MessageService]
})
export class LoginComponent implements OnDestroy {

  loginForm: FormGroup;
  loginSubscription!: Subscription;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get filledusername(): string {
    return this.loginForm.get('emailId')?.value;
  }

  get filledpassword(): string {
    return this.loginForm.get('password')?.value;
  }

  userRequestObj(): UserRequestInterface {
    return {
      emailId: this.filledusername,
      password: this.filledpassword
    }
  }

  onSubmit() {

    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      // Create request object
      const request = this.userRequestObj();

      console.log('Form Submitted', request);

      this.loginSubscription = this.userService.loginUser(request).subscribe({
        next: (val) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Login Successful',
            detail: `Welcome ${request.emailId}`,
            key: 'br',
            life: 3000
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Failed',
            detail: err.message || 'An error occurred during login',
            key: 'br',
            life: 5000
          });
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      this.loginForm.markAllAsTouched();

      this.messageService.add({
        severity: 'warn',
        summary: 'Validation Error',
        detail: 'Please fill all required fields correctly',
        key: 'br',
        life: 3000
      });
    }
  }


  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
