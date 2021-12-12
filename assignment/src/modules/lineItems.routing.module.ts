import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { lineItemsRoutes } from '../routes/lineItems.Route';

@NgModule({
    imports: [
        RouterModule.forChild(lineItemsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LineItemRoutingModule { }
