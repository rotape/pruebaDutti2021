import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.router';

@NgModule({
  imports: [SharedModule, FormsModule, RouterModule.forChild(LOGIN_ROUTES)],
  declarations: [LoginComponent],
})
export class LoginModule {}
