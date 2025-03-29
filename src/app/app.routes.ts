import { Routes } from '@angular/router';
import { ParentcomponentComponent } from './Component/parentcomponent/parentcomponent.component';

export const routes: Routes = [
    { path: 'product', component: ParentcomponentComponent },
    { path: '**', redirectTo: 'product' }
];
