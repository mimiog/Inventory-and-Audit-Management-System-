import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { AddItemsComponent } from './add-items/add-items.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomePageComponent },
  { path: 'inventory', component:InventoryPageComponent },
  { path: 'add', component:AddItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
