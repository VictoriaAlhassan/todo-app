import { AddItemComponent } from './add-item/add-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: 'app-component', component: AppComponent},
  {path:'details-component', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
