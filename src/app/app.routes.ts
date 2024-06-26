import { Routes } from '@angular/router';

// import { HomeComponent } from './domains/shared/components/home/home.component';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { HeaderComponent } from './domains/shared/components/header/header.component';


export const routes: Routes = [
    {
        path: '',
        component: ListComponent 
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
    
];
