import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './core/components/main/main.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
