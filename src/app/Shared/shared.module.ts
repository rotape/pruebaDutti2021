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

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    StoreModule.forFeature('shared', fromStore.SharedReducer),
    EffectsModule.forFeature([fromStore.ShipsEffects]),
  ],
  exports: [
    ...COMPONENTS,
    FormsModule,
    ReactiveFormsModule,
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
