import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SudokuModule} from '../components/sudoku/module/sudoku.module';
import {MainComponent} from '../main.component';

import {MainRoutingModule} from './main-routing.module';

@NgModule({
  imports: [CommonModule, MainRoutingModule, SudokuModule],
  exports: [],
  declarations: [MainComponent],
  providers: [],
})
export default class MainModule {}
