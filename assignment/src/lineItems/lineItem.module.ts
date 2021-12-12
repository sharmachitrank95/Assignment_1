import { NgModule } from '@angular/core';
import { SharedModule } from 'src/modules/shared.module';
import {LineItemComponent} from './lineItem.component';
import {LineItemRoutingModule} from '../modules/lineItems.routing.module';


@NgModule({
    imports: [SharedModule, LineItemRoutingModule],
    declarations: [LineItemComponent]
})

export class LineItemModule { }