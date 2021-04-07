import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// JSON
// import usersList from 'src/assets/json/users.json';
import { User } from '../Shared/models/users.model';
import { AuthService } from '../Shared/services/auth.service';
import { UsersService } from '../Shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  dataLoading = false;
  users: User[];
  unregistered = false;
  invalid = false;
  registeredUser$: Observable<User[]>;
  subs: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    // Implement logic into the auth service
    // set user into the localStorage
    this.registeredUser$ = this.usersService.getUsersList().pipe(
      switchMap((res: User[]) => {
        const filteredResult = res.filter(
          (user: User) => user.username === this.loginForm.value.username
        );
        if (filteredResult.length) {
          this.authService.saveUserToLocalStorage(filteredResult[0]);
          this.router.navigate(['/principal/ships']);
        }
        return [filteredResult];
      })
    );
    const sub = this.registeredUser$.subscribe((res: User[]) => {
      this.unregistered = res.length === 0;
    });
    this.subs.push(sub);
  }
}
