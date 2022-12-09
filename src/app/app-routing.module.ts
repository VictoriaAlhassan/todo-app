import { AddItemComponent } from './add-item/add-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path: '', component: TaskComponent},
  {path:'details/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
