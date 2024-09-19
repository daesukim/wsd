import { Routes } from '@angular/router';
import { PageContainerComponent } from './containers/page-container/page-container.component';
import { resolveContentGuard } from './guards/resolve-content.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: PageContainerComponent,
        data: {
            contentType: 'homepage'
        },
        canActivate: [resolveContentGuard]
    }
];
