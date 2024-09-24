import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ROUTES  } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { HomeComponent } from './domains/shared/components/home/home.component';
import { ProductpagesComponent } from './domains/shared/components/productpages/productpages.component';
import { ContactComponent } from '@shared/components/contact/contact.component';



export const routes: Routes = [
    
        {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full',
        }, 
        {
            path: 'home',
            component: HomeComponent, 
        }, 
        {
            path: 'header',
            component: HeaderComponent, 
        },
        {
            path: 'productos',
            component: ProductpagesComponent, 
        },
        {
            path: 'list', 
            component: ListComponent, pathMatch: 'full'
        },
        
        {
            path: 'about',
            component: AboutComponent, 
        },
        {
            path: 'contact',
            component: ContactComponent, 
        },
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        useHash: true,  
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
  