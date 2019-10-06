import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MainComponent} from '../main.component';

import {MainRoutingModule} from './main-routing.module';

@NgModule({
  imports: [CommonModule, MainRoutingModule],
  exports: [],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {}
