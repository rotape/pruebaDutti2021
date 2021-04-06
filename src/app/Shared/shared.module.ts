import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { COMPONENTS } from './components';
import { SERVICES } from './services';
import * as fromStore from './store';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    ReactiveComponentModule,
    StoreModule.forFeature('shared', fromStore.SharedReducer),
    EffectsModule.forFeature([fromStore.ShipsEffects]),
  ],
  exports: [
    ...COMPONENTS,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    RouterModule,
    CommonModule,
  ],
  declarations: [...COMPONENTS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...SERVICES],
    };
  }
}
