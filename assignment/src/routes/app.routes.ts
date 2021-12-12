import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
        path: 'line-items',
        loadChildren: () => import('../lineItems/lineItem.module').then(m => m.LineItemModule),
    },
    {
        path: 'history',
        loadChildren: () => import('../history/history.module').then(m => m.HistoryModule),
    },
    {
        path:'',
        redirectTo:'line-items',
        pathMatch:'full'
    }
]