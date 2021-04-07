import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from '../Shared/services/auth.service';
import { UsersService } from '../Shared/services/users.service';
import { mockUsersList } from '../Shared/utils/userListMock';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let usersService;
  let authService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
          HttpClientModule,
          FormsModule,
          RouterTestingModule.withRoutes([
            // { path: '/principal/ships', component: PrincipalComponent },
          ]),
          ReactiveFormsModule,
        ],
        providers: [AuthService, UsersService, FormBuilder],
      }).compileComponents();
      usersService = TestBed.inject(UsersService);
      authService = TestBed.inject(AuthService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should set the loginForm', () => {
    component.ngOnInit();
    expect(component.loginForm).toBeDefined();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('should log the user in and redirect', () => {
    const userListSpy = jest.spyOn(usersService, 'getUsersList');
    const authSpy = jest.spyOn(authService, 'saveUserToLocalStorage');
    const navigateSpy = jest.spyOn(router, 'navigate');
    userListSpy.mockImplementation(() => of(mockUsersList));
    component.ngOnInit();
    let username = component.loginForm.controls['username'];
    let password = component.loginForm.controls['password'];
    username.setValue('Bret');
    password.setValue('123123123123');
    component.loginUser();
    expect(component.loginForm.valid).toBeTruthy();
    component.registeredUser$.subscribe((res) => {
      expect(navigateSpy).toHaveBeenCalled();
      expect(authSpy).toHaveBeenCalled();
    });
  });
});
