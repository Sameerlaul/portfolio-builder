import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { InputComponent } from './components/input/input.component';
import { WorkComponent } from './components/work/work.component';
import { RouteGaurdService } from './services/route-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: InputComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [RouteGaurdService]
  },
  {
    path: 'work',
    component: WorkComponent,
    canActivate: [RouteGaurdService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
