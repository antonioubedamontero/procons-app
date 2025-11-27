import { Routes } from '@angular/router';

import { StepperPageComponent } from './pages/stepper-page/stepper-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StepperPageComponent,
  },
  {
    path: 'result',
    loadComponent: () => import('./pages/result-page/result-page.component'),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
