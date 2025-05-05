import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('@shared/map/map.component').then(m => m.MapComponent)},
    {path: 'page1', loadComponent: () => import('@shared/under-construction/under-construction.component').then(m => m.UnderConstructionComponent)},
    {path: 'page2', loadComponent: () => import('@shared/under-construction/under-construction.component').then(m => m.UnderConstructionComponent)},
    {path: 'page3', loadComponent: () => import('@shared/under-construction/under-construction.component').then(m => m.UnderConstructionComponent)},
];
