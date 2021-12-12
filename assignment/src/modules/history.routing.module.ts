
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { historyRoutes } from '../routes/history.routes';

@NgModule({
    imports: [
        RouterModule.forChild(historyRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HistoryRoutingModule { }
