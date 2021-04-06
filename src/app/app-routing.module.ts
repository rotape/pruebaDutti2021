import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Shared/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Login/login.module').then((m) => m.LoginModule),
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'principal',
    loadChildren: () =>
      import(`./principal/principal.module`).then((m) => m.PrincipalModule),
  },
  // { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
