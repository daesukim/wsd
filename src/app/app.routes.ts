import { Routes } from '@angular/router';
import { PageContainerComponent } from './containers/page-container/page-container.component';
import { resolveContentGuard } from './guards/resolve-content.guard';
import { PreviewContainerComponent } from './containers/preview-container/preview-container.component';

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
    },
    {
        path: 'content/about',
        component: PageContainerComponent,
        data: {
            contentType: 'contentPage'
        },
        canActivate: [resolveContentGuard]
    },
    {
        path: 'preview/home',
        component: PreviewContainerComponent,
        data: {
            contentType: 'homepage'
        },
        canActivate: [resolveContentGuard]
    }
];
