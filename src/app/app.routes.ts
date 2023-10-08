import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./intention-selection/intention-selection.component')
    },
    { pathMatch: 'full', path: '**', redirectTo: '' }
];
