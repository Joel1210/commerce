import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },  
  {path: 'products', component: HomeComponent},
  {path: 'products/new', component: CreateComponent},
  {path: 'products/:id', component: DetailsComponent},
  {path: 'products/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
