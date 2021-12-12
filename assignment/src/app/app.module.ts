import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../modules/shared.module';
import { VendorComponent } from '../vendor/vendor.component';
import { ToolbarComponent } from '../vendor/toolbar/toolbar.component';
import { ExpandableComponent } from '../vendor/expandable/expandable.component';
import { AppRoutingModule } from '../modules/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VendorComponent,
    ToolbarComponent,
    ExpandableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
