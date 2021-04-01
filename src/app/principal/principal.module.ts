import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../Shared/shared.module';
// Components
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { ShipsComponent } from './ships/ships.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
  ],
  declarations: [
    PrincipalComponent,
    ShipsComponent,
    PageOneComponent,
    PageTwoComponent,
  ],
})
export class PrincipalModule {}
