import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.modules'

@NgModule({
    exports:[
        FlexLayoutModule,
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule
    ]
})

export class SharedModule { }