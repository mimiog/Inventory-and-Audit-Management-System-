import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AudHomePageComponent } from './aud-home-page/aud-home-page.component';
import { DirHomePageComponent } from './dir-home-page/dir-home-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { AuditsPageComponent } from './audits-page/audits-page.component';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:AdminHomePageComponent },
  { path: 'inventory', component:InventoryPageComponent },
  { path: 'audits', component:AuditsPageComponent},
  { path: 'newitem', component: AddnewitemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
