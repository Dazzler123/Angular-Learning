import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {OrderComponent} from "./order/order.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'}, //if path is empty, redirect to home page
  {path:'home', component:HomeComponent},
  {path:'customer', component:CustomerComponent},
  {path:'order', component:OrderComponent},
  {path:'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
