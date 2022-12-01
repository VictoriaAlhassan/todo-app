
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
