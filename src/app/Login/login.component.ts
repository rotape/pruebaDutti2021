import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dataLoading = false;
  users: User[];
  unregistered = false;
  invalid = false;

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
  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    //Implement logic into the auth service
    const userLogin = this.loginForm.value.username;
    this.usersService.getUsersList().subscribe((userList: User[]) => {
      const filterJson = userList.filter((user) => user.username === userLogin);
      if (filterJson.length > 0) {
        this.authService.saveUserToLocalStorage(filterJson[0]);
        this.router.navigate(['/principal/ships']);
      } else {
        this.unregistered = true;
      }
    });
  }
}
