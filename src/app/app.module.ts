
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';


 const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path:'details', component: DetailsComponent}
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
 ]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
