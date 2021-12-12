import { NgModule } from '@angular/core';
import { SharedModule } from 'src/modules/shared.module';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from '../modules/history.routing.module';


@NgModule({
    imports: [SharedModule, HistoryRoutingModule],
    declarations: [HistoryComponent]
})

export class HistoryModule { }