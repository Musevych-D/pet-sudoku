import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SudokuComponent} from '../components/sudoku/sudoku.component';
import {MainComponent} from '../main.component';

const routes: Routes = [{path: '', component: MainComponent, children: [{path: '', component: SudokuComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
