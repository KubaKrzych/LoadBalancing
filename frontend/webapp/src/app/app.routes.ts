import { Routes } from '@angular/router';
import { RoutesPath } from './core/constants/routes.const';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: RoutesPath.HOME,
        pathMatch: 'full'
    },
    {
        path: RoutesPath.HOME,
        component: HomeComponent
    },
    {
        path: RoutesPath.APP,
        component: AppComponent
    }
];
